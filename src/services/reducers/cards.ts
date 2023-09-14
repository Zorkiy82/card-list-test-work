import { TCardsActions } from "../actions/card";
import {
  GET_CARDS_FAILED,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
} from "../actions/consts";
import { TCard } from "../types";

export type TCardsState = {
  data: {
    count: number;
    entries: Array<TCard>;
  };
  dataRequest: boolean;
  dataFailed: boolean;
  dataSuccess: boolean;
};

const cardsInitialState: TCardsState = {
  data: {
    count: 0,
    entries: [],
  },
  dataRequest: false,
  dataFailed: false,
  dataSuccess: false,
};

export const cardsReducer = (
  state = cardsInitialState,
  action: TCardsActions
): TCardsState => {
  switch (action.type) {
    case GET_CARDS_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
        dataSuccess: false,
      };
    }

    case GET_CARDS_SUCCESS: {
      return {
        ...state,
        dataFailed: false,
        data: {
          count: action.items.count,
          entries: action.items.entries.map((val) => {
            return { ...val, isLiked: false };
          }),
        },
        dataSuccess: true,
        dataRequest: false,
      };
    }

    case GET_CARDS_FAILED: {
      return {
        ...state,
        dataFailed: true,
        dataRequest: false,
        dataSuccess: false,
        data: { count: 0, entries: [] },
      };
    }

    default: {
      return state;
    }
  }
};
