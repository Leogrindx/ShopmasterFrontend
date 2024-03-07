import { FC } from "react";
import {
  Link,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Animation from "../../../components/loading/Loading";
import { ItemResponse } from "../../../models/ItemResponse";
import { routeItemsQuery } from "../../../store/items";
import Cart from "./cart/Cart";
import s from "./RenderItems.module.scss";
import classNames from "classnames";
const RenderItems: FC = () => {
  const location = useLocation();
  const { gender, filter } = useParams();
  const { data, isLoading, error } = useQuery(
    routeItemsQuery(gender || "", filter || "", location.search)
  );
  const items = data?.data as ItemResponse[];
  const [page, setPage] = useSearchParams({ page: "1" });
  const scrollPages = (state: string) => {
    const pageNum = Number(page.get("page"));
    if (state === "prev") {
      if (pageNum > 1) {
        setPage({ page: `${pageNum - 1}` });
      }
    }
    if (state === "next") {
      setPage({ page: `${pageNum + 1}` });
    }
  };
  if (isLoading) {
    return (
      <>
        <Animation />
      </>
    );
  }

  return (
    <div className={s.items}>
      <div>
        <div className={s.view_items}>
          {items.length !== 0 ? (
            items.map((e, i) => (
              <div className={s.view_item} key={i}>
                <div>
                  <Cart sizes={e.size} keyx={i} itemID={e.id} />
                </div>
                <Link to={`/item/${e.ean}`}>
                  <div className={s.item}>
                    <div className={s.img}>
                      <div className={s.articl_items}>
                        <img
                          className={s.img}
                          src={`${process.env.PUBLIC_URL}${
                            e.img.filter((e) => e.search("front") > -1)[0]
                          }`}
                          alt="item"
                        />
                        <div className={s.got_to}>
                          <div className={s.btn_item}>go to</div>
                        </div>
                      </div>
                      <div className={s.add_item_in_basket}></div>
                    </div>
                    <div className={s.item_text}>
                      <div className={s.item_name}>
                        <div className={s.brand}>
                          <p>{e.brand}</p>
                        </div>
                        <div className={s.name}>
                          <p>{e.name}</p>
                        </div>
                      </div>
                      <div className={s.item_price}>
                        <p>{e.price},</p>
                        <p>{e.cent ? e.cent : "00"}</p>
                        <p className={s.currency}>zl</p>
                      </div>
                    </div>
                    <div className={s.item_size}>
                      <p>size:</p>
                      {e.size.map((e) => `${e}, `)}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className={s.notItems}>
              <h1>There is no such product</h1>
            </div>
          )}
        </div>
        <div className={s.trigger}>
          <div className={s.prev}>
            <button
              onClick={(e) => scrollPages("prev")}
              className={classNames(s.arrow, s.leftArrow)}
              disabled={Number(page.get("page")) <= 1 ? true : false}
            >
              ➤
            </button>
          </div>
          <div className={s.pages}>{page.get("page")}</div>
          <div className={s.next}>
            <button onClick={(e) => scrollPages("next")} className={s.arrow}>
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderItems;
