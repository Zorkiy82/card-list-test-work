import { AppDispatch, AppThunk } from "../hooks";
import { TCard } from "../types";
import { getCards } from "../utils/cards-api";
import {
  DELETE_CARD,
  GET_CARDS_FAILED,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  TOOGLE_CARD_LIKE,
  TOOGLE_SHOW_LIKED_CARDS,
} from "./consts";

export interface IGetCardsAction {
  readonly type: typeof GET_CARDS_REQUEST;
}
export interface IGetCardsSuccessAction {
  readonly type: typeof GET_CARDS_SUCCESS;
  payload: {
    count: number;
    entries: Array<TCard>;
  };
}
export interface IGetCardsFailedAction {
  readonly type: typeof GET_CARDS_FAILED;
}

export interface IToogleShowLikedCards {
  readonly type: typeof TOOGLE_SHOW_LIKED_CARDS;
}

export interface IToogleCardLike {
  readonly type: typeof TOOGLE_CARD_LIKE;
  payload: {
    link: string;
  };
}

export interface IDeleteCard {
  readonly type: typeof DELETE_CARD;
  payload: {
    link: string;
  };
}

export type TCardsActions =
  | IGetCardsAction
  | IGetCardsSuccessAction
  | IGetCardsFailedAction
  | IToogleShowLikedCards
  | IToogleCardLike
  | IDeleteCard;

export const getCardsData: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_CARDS_REQUEST,
  });

  getCards()
    .then((res) => {
      const cutData = res.entries.slice(0, 50).map((val) => {
        return {
          api: val.API,
          description: val.Description,
          auth: val.Auth,
          https: val.HTTPS,
          cors: val.Cors,
          link: val.Link,
          category: val.Category,
          isLike: false,
        } as TCard;
      });
      dispatch({
        type: GET_CARDS_SUCCESS,
        payload: {
          count: cutData.length,
          entries: cutData,
        },
      });
    })
    .catch((res: Response) => {
      dispatch({ type: GET_CARDS_FAILED });
      const code = res.status;
      const url = res.url;
      res.json().then((res) => {
        console.log(res, code, url);
      });
    });
};
