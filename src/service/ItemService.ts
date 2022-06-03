import $api from '../http/Htttp'
import {AxiosResponse} from 'axios'
import {ItemResponse} from '../models/ItemResponse'

export default class ItemService{
    static get(path: string): Promise<AxiosResponse<ItemResponse[]>>{
        return $api.get<ItemResponse[]>(`/items${path}`)
    }
    
}

// router.post('/item', itemController.create)
// router.get('/item/:id', itemController.getOne)
// router.put('/item/', itemController.update)
// router.delete('/item/:id', itemController.delete)