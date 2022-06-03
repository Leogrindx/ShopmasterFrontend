import {IUser} from '../models/AuthResponse'
import {makeAutoObservable} from 'mobx'
import ItemService from '../service/ItemService'
import loading from '../components/loading/Loading'
import {ItemResponse} from '../models/ItemResponse'
export default class ItemsStore{
    items: ItemResponse[] = []

    constructor(){
        makeAutoObservable(this)
    }

    private setItems(items: ItemResponse[]){
        this.items = items
    }

    async route(path: string){
        try{
            const res = await ItemService.get(path)
            this.setItems(res.data)
        }catch(e){
            this.setItems([])
        }
    }

    async filter(){
        
    }
}