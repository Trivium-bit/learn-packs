import { CardPackRequestType, CardPacksType, cardsPacksApi } from "api/cardsPacks-api";
import { RequestStatus, setError, setLoading } from "./app-reducer";
import { AppDispatch, AppRootReducerType } from "./store";


type CardsPacksActionsType =
  | ReturnType<typeof getCardsPacksAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof addCardsPackAC>
  | ReturnType<typeof changeNameCardsPackAC>

const initialState = {
  cardPacks: [] as Array<CardPacksType>,
  packName: '',
  min: 0,
  max: 111,
  sortPacks: '0updated',
  pageCount: 8,
  page: 1,
  cardPacksTotalCount: 0
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
      return {...state, packName: action.newPackName}
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
export const changeNameCardsPackAC = (newPackName: string) => ({
  type: "CHANGE_NAME_CARDS_PACK", newPackName
} as const);


export const getCardsPacksTC = () => async (dispatch: AppDispatch, getState: () => AppRootReducerType) => {
  const { pageCount, packName, min, max, sortPacks, page } = getState().packs;
  try {
    dispatch(setLoading(RequestStatus.loading));
    const res = await cardsPacksApi.getCardsPacks({ pageCount, packName, min, max, sortPacks, page });
    const currentPagesCount = Math.ceil(res.data.cardPacksTotalCount / res.data.pageCount)
    dispatch(getCardsPacksAC(res.data.cardPacks, currentPagesCount, res.data.page));
    dispatch(setLoading(RequestStatus.succeeded));
  } catch (e) {
    dispatch(setError(e as string));
    dispatch(setLoading(RequestStatus.error));
  }
};
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
export const changeNameCardsPackTC = (_id: string, newPackName: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(RequestStatus.loading));
    await cardsPacksApi.changeNameCardsPack(_id, newPackName);
    dispatch(changeNameCardsPackAC(newPackName));
    dispatch(setLoading(RequestStatus.succeeded));
  } catch (e) {
    dispatch(setError(e as string));
    dispatch(setLoading(RequestStatus.error));
  }
};