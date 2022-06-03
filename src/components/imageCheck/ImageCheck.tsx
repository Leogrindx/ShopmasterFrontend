import s from './ImageCheck.module.scss'
import g from '../../Index.module.scss'
import {useHistory} from 'react-router-dom'
import classNames from 'classnames'
import { routes } from '../../config/routes'
const ImageCheck = () =>{
        const history = useHistory()
        function ActiveLink (gender: string, e: any){
            e.preventDefault()
            sessionStorage.clear()
            sessionStorage.setItem('active', gender)
            history.push(`/${gender}`)
        }
    return(
        <div className={s.row}>
                <div className={classNames(s.man, s.container_content)}>
                <a href={routes.man} onClick={(e) => ActiveLink('man', e)}>
                        <div className={g.img_preview}>
                        <img src="/img/man_preview.jpg" width="100%" alt="Man"/>
                        </div>
                </a>
                </div>

                <div className={classNames(s.woman, s.container_content)}>
                <a href={routes.man} onClick={(e) => ActiveLink('woman', e)}>
                        <div className={g.img_preview}>
                        <img src="/img/women_preview.jpg" width="100%" alt="Woman"/>
                        </div>
                </a>
                </div>
        </div>
    )
}
export default ImageCheck