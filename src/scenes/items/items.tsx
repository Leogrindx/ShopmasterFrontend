import { Outlet } from "react-router-dom";
import s from "./items.module.scss";
import Filter from "./filter/filter";
import Menu from "../../components/menu/Menu";
import { useResponsive } from "../../Hooks/useResponsive";
const Items = () => {
  const { respon } = useResponsive();

  return (
    <>
      {!respon && <Menu />}
      <div className={s.itemsContainer}>
        <Filter />
        <Outlet />
      </div>
    </>
  );
};

export default Items;
