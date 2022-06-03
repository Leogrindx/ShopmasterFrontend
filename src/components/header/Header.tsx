import {FC, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {routes} from '../../config/routes'
import s from './Header.module.scss'
import Search from './search/Search'
import AccountPanel from './accountPanel/AccountPanel'
import classNames from 'classnames'
const Header: FC = () =>{
    const history = useHistory()
    function ActiveLink (gender: string, e: any){
        e.preventDefault()
        sessionStorage.clear()
        sessionStorage.setItem('active', gender)
        history.push(`/${gender}`)
    }

    const activeClass = (gender: string) => {
        const active = sessionStorage.getItem('active')
        if(gender === active){
            return true
        }
        return false
    }

    return(
        <div className={s.header}>
            
            <div className={s.navBar}>
                <a href={routes.man} onClick={(e) => ActiveLink('man', e)} className={classNames(s.links, activeClass('man') ? s.linkActive : s.linkNotActive)}>man</a>
                <a href={routes.woman} onClick={(e) => ActiveLink('woman', e)} className={classNames(s.links, activeClass('woman') ? s.linkActive : s.linkNotActive)}>woman</a>
                <a href={routes.baby} onClick={(e) => ActiveLink('baby', e)} className={classNames(s.links, activeClass('baby') ? s.linkActive : s.linkNotActive)}>baby</a>
            </div>

            <div className={s.logo} id="logo">
                <Link to={routes.home}><img src="/img/logo.png" width="200" alt="Logo"/></Link>
            </div>
            <Search />
            <div className={s.block_user}>
                <AccountPanel />
                <div className={s.cart}>
                <Link to={routes.cart}>
                    <div className={s.number_item_cart} id="number_item_cart"></div>
                    <img className={s.basket_img_login} src="/img/basket.png" alt="cart"/>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Header