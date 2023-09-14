import { AppDispatch, AppThunk } from "../hooks";
import { TCard } from "../types";
import { getCards } from "../utils/cards-api";
import {
  GET_CARDS_FAILED,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
} from "./consts";

export interface IGetCardsAction {
  readonly type: typeof GET_CARDS_REQUEST;
}
export interface IGetCardsSuccessAction {
  readonly type: typeof GET_CARDS_SUCCESS;
  items: {
    count: number;
    entries: Array<TCard>;
  };
}
export interface IGetCardsFailedAction {
  readonly type: typeof GET_CARDS_FAILED;
}

export type TCardsActions =
  | IGetCardsAction
  | IGetCardsSuccessAction
  | IGetCardsFailedAction;

export const getCardsData: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_CARDS_REQUEST,
  });

  getCards()
    .then((res) => {
      dispatch({
        type: GET_CARDS_SUCCESS,
        items: res,
      });
    })
    .catch((res: Response) => {
      dispatch({type: GET_CARDS_FAILED})
      const code = res.status;
      const url = res.url;
      res.json().then((res) => {
        console.log(res, code, url);
      });
    });
};
