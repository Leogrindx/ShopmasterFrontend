import {Switch, Route} from "react-router-dom"
import { routes } from '../config/routes'
import Home from './home/Home'
import Items from './items/items'
import Error404 from './error/Error404'
import Login from './auth/login/Login'
import Register from './auth/register/Register'
import Forgot from './auth/forgotPassword/Forgot'
import Cart from './cart/Cart'
const Routers = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path={routes.login} component={Login} />
            <Route path={routes.register} component={Register}/>
            <Route path={routes.forgot_password} component={Forgot} />
            <Route path={routes.man} component={Items} />
            <Route path={routes.woman} component={Items}/>
            <Route path={routes.baby} component={Items}/>
            <Route path={routes.cart} component={Cart}/>
            <Route path={'*'} component={Error404} />
        </Switch>
    )
}

export default Routers;