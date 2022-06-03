import s from './items.module.scss'
import Filter from './filter/filter'
import RenderItems from './RenderItems/RenderItems'
import Menu from '../../components/menu/menu'
const items = () => {
    return (
        <div>
            <Menu />
            <div className={s.itemsContainer}>
                <Filter />
                <RenderItems />
            </div>
            
        </div>
    )
}

export default items