import { CardPackRequestType, CardPacksType, cardsPacksApi } from "api/cardsPacks-api";
import { RequestStatus, setError, setLoading } from "./app-reducer";
import { AppDispatch, AppRootReducerType } from "./store";
import { Dispatch } from 'redux';

export type PacksCardParamsType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
  isMyPacks?: boolean
}

type CardsPacksActionsType =
  | ReturnType<typeof getCardsPacksAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof addCardsPackAC>
  | ReturnType<typeof changeNameCardsPackAC>
  | ReturnType<typeof searchPacksAC>
  | ReturnType<typeof setIsMyTableAC>
  | ReturnType<typeof setPackCardsCountAC>
  
const initialState = {
  cardPacks: [] as Array<CardPacksType>,
  packName: '',
  min: 0,
  max: 120,
  sortPacks: '0updated',
  pageCount: 8,
  page: 1,
  cardPacksTotalCount: 0,
  search: "",
  isMyPacks: false,
}

type InitialStateType = typeof initialState

export const packsReducer = (
  state: InitialStateType = initialState,
  action: CardsPacksActionsType
): InitialStateType => {
  switch (action.type) {
    case "GET_CARDS_PACKS": {
      return {
        ...state,
        cardPacks: action.cardPacks,
        cardPacksTotalCount: action.cardPacksTotalCount,
        page: action.page,
      };
    }
    case "SET_CURRENT_PAGE":
      return { ...state, page: action.page }
    case "ADD_CARDS_PACK":
      return { ...state, cardPacks: [action.pack, ...state.cardPacks] }
    case "CHANGE_NAME_CARDS_PACK":
      return { ...state, packName: action.name }
    case "SEARCH_CARDS_PACK":
      return {
        ...state,
        cardPacks: [...state.cardPacks].filter((cardPack) =>
          cardPack.name?.toLowerCase().includes(action.search.toLowerCase()))
      }
    case "SET_IS_MY_TABLE":
      return { ...state, isMyPacks: action.isMyPacks }
    case "SET_PACK_CARD_COUNT":
      return { ...state, min: action.min, max: action.max }
    default: {
      return state;
    }
  }
};

export const getCardsPacksAC = (cardPacks: CardPacksType[], cardPacksTotalCount: number, page: number) => ({
  type: "GET_CARDS_PACKS", cardPacks, cardPacksTotalCount, page
} as const);
export const setCurrentPageAC = (page: number) => ({
  type: "SET_CURRENT_PAGE", page
} as const);
export const addCardsPackAC = (pack: CardPacksType) => ({
  type: "ADD_CARDS_PACK", pack
} as const);
export const changeNameCardsPackAC = (_id: string, name: string) => ({
  type: "CHANGE_NAME_CARDS_PACK", _id, name
} as const);
export const searchPacksAC = (search: string) => ({
  type: "SEARCH_CARDS_PACK", search
} as const);
export const setIsMyTableAC = (isMyPacks: boolean) => ({
  type: "SET_IS_MY_TABLE", isMyPacks
} as const);
export const setPackCardsCountAC = (min: number, max: number) => ({
  type: "SET_PACK_CARD_COUNT", min, max
} as const);



export const getCardsPacksTC = () => async (dispatch: Dispatch, getState: () => AppRootReducerType) => {
  const user_id = getState().auth.profileData._id
  const { pageCount, packName, min, max, sortPacks, page, isMyPacks } = getState().packs;
  try {
    dispatch(setLoading(RequestStatus.loading));
    const res = await cardsPacksApi.getCardsPacks(isMyPacks
      ? { user_id, page, pageCount, packName, min, max, sortPacks }
      : { page, pageCount, packName, min, max, sortPacks })
    const currentPagesCount = Math.ceil(res.data.cardPacksTotalCount / res.data.pageCount)
    dispatch(getCardsPacksAC(res.data.cardPacks, currentPagesCount, res.data.page));
    dispatch(setLoading(RequestStatus.succeeded));
  } catch (e) {
    dispatch(setError(e as string));
    dispatch(setLoading(RequestStatus.error));
  }
}
export const addCardsPackTC = (pack: CardPackRequestType) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(RequestStatus.loading));
    await cardsPacksApi.addCardsPack(pack);
    dispatch(getCardsPacksTC());
    dispatch(setLoading(RequestStatus.succeeded));
  } catch (e) {
    dispatch(setError(e as string));
    dispatch(setLoading(RequestStatus.error));
  }
};
export const deleteCardsPackTC = (_id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(RequestStatus.loading));
    await cardsPacksApi.deleteCardsPack(_id);
    dispatch(getCardsPacksTC());
    dispatch(setLoading(RequestStatus.succeeded));
  } catch (e) {
    dispatch(setError(e as string));
    dispatch(setLoading(RequestStatus.error));
  }
};
export const changeNameCardsPackTC = (_id: string, name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(RequestStatus.loading));
    await cardsPacksApi.changeNameCardsPack({ _id, name });
    dispatch(changeNameCardsPackAC(_id, name));
    dispatch(getCardsPacksTC());
    dispatch(setLoading(RequestStatus.succeeded));
  } catch (e) {
    dispatch(setError(e as string));
    dispatch(setLoading(RequestStatus.error));
  }
};