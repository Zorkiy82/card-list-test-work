import { TCardsActions } from "../actions/card";
import {
  DELETE_CARD,
  GET_CARDS_FAILED,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  TOOGLE_CARD_LIKE,
  TOOGLE_SHOW_LIKED_CARDS,
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
  showLikedCards: boolean;
};

const cardsInitialState: TCardsState = {
  data: {
    count: 0,
    entries: [],
  },
  dataRequest: false,
  dataFailed: false,
  dataSuccess: false,
  showLikedCards: false,
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
        data: action.payload,
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

    case TOOGLE_SHOW_LIKED_CARDS: {
      return {
        ...state,
        showLikedCards: !state.showLikedCards,
      };
    }

    case TOOGLE_CARD_LIKE: {
      const newEntries = state.data.entries.map((val) => {
        if (val.link === action.payload.link) {
          return { ...val, isLike: !val.isLike };
        }
        return val;
      });
      return {
        ...state,
        data: { ...state.data, entries: newEntries },
      };
    }

    case DELETE_CARD: {
      const newEntries = state.data.entries.filter(
        (val) => val.link !== action.payload.link
      );
      return {
        ...state,
        data: { ...state.data, entries: newEntries },
      };
    }

    default: {
      return state;
    }
  }
};
