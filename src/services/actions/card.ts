import { TCard } from "../types";
import { GET_CARDS_FAILED, GET_CARDS_REQUEST, GET_CARDS_SUCCESS } from "./consts";

export interface IGetCardsAction {
    readonly type: typeof GET_CARDS_REQUEST;
  }
  export interface IGetCardsSuccessAction {
    readonly type: typeof GET_CARDS_SUCCESS;
    items: Array<TCard>;
  }
  export interface IGetCardsFailedAction {
    readonly type: typeof GET_CARDS_FAILED;
  }

  export type TCardsActions =
  | IGetCardsAction
  | IGetCardsSuccessAction
  | IGetCardsFailedAction