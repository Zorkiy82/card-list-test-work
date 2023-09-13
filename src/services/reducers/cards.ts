import { TCardsActions } from "../actions/card";
import { GET_CARDS_FAILED, GET_CARDS_REQUEST, GET_CARDS_SUCCESS } from "../actions/consts";
import { TCard } from "../types";


export type TCardsState = {
  items: ReadonlyArray<TCard>;
  itemsRequest: boolean;
  itemsFailed: boolean;
};

const cardsInitialState: TCardsState = {
  items: [],
  itemsRequest: true,
  itemsFailed: false,
};

export const cardsReducer = (
  state = cardsInitialState,
  action: TCardsActions
): TCardsState => {
  switch (action.type) {
    case GET_CARDS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }

    case GET_CARDS_SUCCESS: {
    //   const itemsCatalog: TIngredientCatalog = {};
    //   action.items.forEach((item) => {
    //     itemsCatalog[item._id] = { ...item };
    //   });

      return {
        ...state,
        // itemsFailed: false,
        // items: action.items,
        // itemsCatalog: itemsCatalog,
        // itemsRequest: false,
      };
    }

    case GET_CARDS_FAILED: {
      return {
        ...state,
        itemsFailed: true,
        itemsRequest: false,
        items: [],
      };
    }

    default: {
      return state;
    }
  }
};
