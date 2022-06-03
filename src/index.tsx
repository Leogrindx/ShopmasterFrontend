import {createContext} from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import AuthStore from './store/auth'
import ItemsStore from './store/items'
import App from './App'
interface State{
  auth: AuthStore,
  items: ItemsStore
}
const auth = new AuthStore()
const items = new ItemsStore()

export const Context = createContext<State>({
  auth,
  items,
})

ReactDOM.render(
  <Context.Provider value={{auth, items}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
  

  ,document.getElementById('root')
);
