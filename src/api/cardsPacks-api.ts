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
    return instance.get<ResponseCardsPacksType>(`/cards/pack`, { params: args });
  },
  addCardsPack(pack: CardPackRequestType) {
    return instance.post<ResponseCardsPacksType>(`/cards/pack`, {cardsPack: pack});
  },
  deleteCardsPack(_id: string) {
    return instance.delete<ResponseCardsPacksType>(`/cards/pack?id=${_id}`);
  },
  changeNameCardsPack(_id: string, name: string) {
    return instance.put<ResponseCardsPacksType>(`/cards/pack`, {_id, name});
  },
}






//==TYPES=========================================================================================

export type CardPacksType = {
    _id: string;
    user_id?: string;
    user_name?: string;
    private?: boolean;
    name?: string;
    path?: string;
    grade?: number;
    shots?: number;
    cardsCount?: number;
    type?: string;
    rating?: number;
    created?: string;
    updated: string;
    more_id: string;
    __v: number;
  }

export type ResponseCardsPacksType = {
    cardPacks: CardPacksType[];
    page: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
  }

  export type CardPackRequestType = {
    name: string
    path?: string | null
    grade?: number //средняя оценка карточек
    shots?: number //колличество попыток ответить
    rating?: number //лайки
    deckCover?: string //обложка колоды
    private?: boolean
    type?: string
}