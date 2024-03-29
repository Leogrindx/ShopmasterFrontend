import $api from "../http/Htttp";
import { AxiosResponse } from "axios";
import { ItemResponse } from "../models/ItemResponse";

export default class ItemService {
  static all(): Promise<AxiosResponse<ItemResponse[]>> {
    return $api.get<ItemResponse[]>(`/items`);
  }

  static getOne(ean: string): Promise<AxiosResponse<ItemResponse>> {
    return $api.get<ItemResponse>(`/item/${ean}`);
  }

  static route(
    gender: string,
    page: string
  ): Promise<AxiosResponse<ItemResponse[]>> {
    if (page) {
      return $api.get<ItemResponse[]>(`/items/${gender}${page}`);
    }
    return $api.get<ItemResponse[]>(`/items/${gender}`);
  }

  static filter(
    gender: string,
    filter: string,
    page: string
  ): Promise<AxiosResponse<ItemResponse[]>> {
    if (page) {
      return $api.get<ItemResponse[]>(`/items/${gender}/${filter}${page}`);
    }
    return $api.get<ItemResponse[]>(`/items/${gender}/${filter}`);
  }
}

// router.post('/item', itemController.create)
// router.get('/item/:id', itemController.getOne)
// router.put('/item/', itemController.update)
// router.delete('/item/:id', itemController.delete)
