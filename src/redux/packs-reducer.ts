import { CardPacksType, cardsPacksApi } from "api/cardsPacks-api";
import { Dispatch } from "redux";
import { RequestStatus, setError, setLoading } from "./app-reducer";
import { AppRootReducerType } from "./store";


type CardsPacksActionsType =
  | ReturnType<typeof setCardsPacksAC>
  | ReturnType<typeof setCurrentPageAC>

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
    default: {
      return state;
    }
  }
};

export const setCardsPacksAC = (cardPacks: CardPacksType[], cardPacksTotalCount: number, page: number) => ({
  type: "GET_CARDS_PACKS", cardPacks, cardPacksTotalCount, page
} as const);
export const setCurrentPageAC = (page: number) => ({
  type: "SET_CURRENT_PAGE", page
} as const);


export const setCardsPacksTC = () => async (dispatch: Dispatch, getState: () => AppRootReducerType) => {
  const { pageCount, packName, min, max, sortPacks, page } = getState().packs;
  try {
    dispatch(setLoading(RequestStatus.loading));
    const res = await cardsPacksApi.getCardsPacks({ pageCount, packName, min, max, sortPacks, page });
    const currentPagesCount = Math.ceil(res.data.cardPacksTotalCount / res.data.pageCount)
    dispatch(setCardsPacksAC(res.data.cardPacks, currentPagesCount, res.data.page));
    dispatch(setLoading(RequestStatus.succeeded));
  } catch (e) {
    dispatch(setError(e as string));
    dispatch(setLoading(RequestStatus.error));
  }
};