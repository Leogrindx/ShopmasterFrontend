import {useEffect, useState} from "react"
import s from "./menu.module.scss";
import r from "./menuRespons.module.scss";
import { useMenu } from "./useMenu";
import {useParams, Link} from "react-router-dom"
import {useResponsive} from "../../Hooks/useResponsive"
import classNames from "classnames";

const Menu = () => {
  const [menu, setMenu] = useState(false)
  const { respon } = useResponsive();
  const {gender} = useParams()
  const { type, sort, width, height} = useMenu(gender);
  useEffect(() => {
    sort("shoes")
  }, [])
  return (
    <>
      {!respon === true ? (
      <div className={s.menu}>
        <div className={s.types}>
          <div onMouseEnter={() => sort("shoes")} className={s.type}>Shoes</div>
          <div onMouseEnter={() => sort("cloth")} className={s.type}>Cloth</div>
        </div>
        <div className={s.content} style={{width: width, height: height}}>
          {type.map((e,i) => (
            <div key={i} style={!respon && {width: 200, height: 50}} className={s.menuElement}>
              <p key={e}>{e}</p>
            </div>
          ))}
        </div>
      </div>
      ):(
        <div className={r.menu}>
        <div className={r.types}>
          <div onClick={() => {sort("shoes"); setMenu(true)}} className={r.menuElement}>Shoes</div>
          <div onClick={() => {sort("cloth"); setMenu(true)}} className={r.menuElement}>Cloth</div>
        </div>
        <div className={menu ? classNames(r.show,r.block) : r.block}>
          <div onClick={()=> setMenu(false)} className={r.back}><p>➔</p></div>
          {type.map((e,i) => (
            <div key={i} className={r.menuElement}>
              <Link to={`${gender}/${e}`}>{e}</Link>
            </div>
          ))}
        </div>
        </div>
      )}
    </>
  );
};

export default Menu;
