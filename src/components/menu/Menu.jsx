import {useEffect} from "react"
import s from "./menu.module.scss";
import { useMenu } from "./useMenu";
import {useParams} from "react-router-dom"

const Menu = () => {
  const {gender} = useParams()
  const { type, sort, width, height} = useMenu(gender);
  return (
    <div className={s.menu}>
      <div className={s.types}>
        <div onMouseEnter={() => sort("shoes")} className={s.type}>Shoes</div>
        <div onMouseEnter={() => sort("cloth")} className={s.type}>Cloth</div>
      </div>
        <div className={s.content} style={{width: width, height: height}}>
        {type.map((e,i) => (
          <div key={i} style={{width: 200, height: 50}} className={s.menuElement}>
            <p key={e}>{e}</p>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Menu;
