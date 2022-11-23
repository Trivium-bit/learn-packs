import { instance } from "./instance";

export type GetCardsPacksType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
}


export const cardsPacksApi = {
  getCardsPacks(args: GetCardsPacksType) {
    return instance.get<ResponseCardsPacksType>(`/cards/pack`,{params: args});
},
}




//==TYPES=========================================================================================

export type CardPacksType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;
  name: string;
  path: string;
  grade: number;
  shots: number;
  cardsCount: number;
  type: string;
  rating: number;
  created: string;
  updated: string;
  more_id: string;
  __v: number;
}

export type ResponseCardsPacksType = {
  cardsPacks: CardPacksType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
}

