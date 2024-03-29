import { useEffect, useContext } from "react";
import { Context } from "./index";

import Routers from "./scenes/App";
import Login from "./scenes/auth/login/Login";
import Register from "./scenes/auth/register/Register";
import Error404 from "./scenes/error/Error404";
import Home from "./scenes/home/Home";
import Items from "./scenes/items/items";
import ItemDetail from "./scenes/items/ItemDetail/ItemDetail";
import Forgot from "./scenes/auth/forgotPassword/Forgot";
import Cart from "./scenes/cart/Cart";
import RenderItems from "./scenes/items/RenderItems/RenderItems";
import Shopmaster from "./scenes/shopmaster/Shopmaster";
import { routes } from "./config/routes";
import s from "./Index.module.scss";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
const App = () => {
  const { auth } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      auth.checkAuth();
    }
  }, []);

  const JSXRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path="/" element={<Routers />}>
          <Route index element={<Home />} />
          <Route path="/shopmaster" element={<Shopmaster />} />
          <Route path={routes.forgot_password} element={<Forgot />} />
          <Route path={routes.forgot_password} element={<Forgot />} />
          <Route path="/*" element={<Items />} errorElement={<Error404 />}>
            <Route
              path=":gender"
              element={<RenderItems />}
              errorElement={<Error404 />}
            />
            <Route
              path=":gender/:filter"
              element={<RenderItems />}
              errorElement={<Error404 />}
            />
          </Route>
          <Route
            path={`${routes.itemDetail}/:ean`}
            element={<ItemDetail />}
            errorElement={<Error404 />}
          />
          <Route
            path={routes.cart}
            element={<Cart />}
            errorElement={<Error404 />}
          />
        </Route>
      </Route>
    )
  );
  return (
    <div className={s.container}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={JSXRouter} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
