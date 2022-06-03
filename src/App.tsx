import {useEffect, useContext} from 'react'
import { Context } from './index'
import {useLocation} from "react-router-dom"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Routers from './scenes/Router'
import s from './Index.module.scss'
const App = () => {
    const location = useLocation()
    const {auth} = useContext(Context)
    const check = () => {
        switch(location.pathname){
            case '/login':
                return false
            case '/register':
                return false
            case '/forgot_password':
                return false
            default:
                return true
        }
    }
    useEffect(() => {
        if(localStorage.getItem('token')){
            auth.checkAuth()
        }
    },[])
    
    return (
        <div className={s.container}>
            {check() && <Header />}
            <Routers />
            {check() && <Footer />}
        </div>
        
    )   
}

export default App