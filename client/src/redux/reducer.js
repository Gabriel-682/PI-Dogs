import {
  GET_ALL_DOGS,
  SEARCH_BY_NAME,
  GET_DETAIL,
  GET_TEMPERAMENTS,
  ORDER_BY,
} from "./actionsTypes";

const initialState = {
  dogsRender: [],
  temperaments: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogsRender: payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        dogsRender: payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        dogsRender: payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    case ORDER_BY:
      console.log(state.dogsRender[0].weight.split(" ")[2]);
      let reordered = [];
      if (payload === "az")
        reordered = state.dogsRender.sort((a, b) => (a.name > b.name ? 1 : -1));
      if (payload === "za")
        reordered = state.dogsRender.sort((a, b) => (a.name < b.name ? 1 : -1));
      if (payload === "menorPeso")
        reordered = state.dogsRender.sort((a, b) => {
          const dogA = a.weight === "NaN" ? [1000] : a.weight.split(" ");
          const dogB = b.weight === "NaN" ? [1000] : b.weight.split(" ");

          return Number(dogA[dogA.length - 1]) > Number(dogB[dogB.length - 1])
            ? 1
            : -1;
        });
      if (payload === "mayorPeso")
        reordered = state.dogsRender.sort((a, b) => {
          const dogA = a.weight === "NaN" ? [1000] : a.weight.split(" ");
          const dogB = b.weight === "NaN" ? [1000] : b.weight.split(" ");

          return Number(dogA[dogA.length - 1]) < Number(dogB[dogB.length - 1])
            ? 1
            : -1;
        });
      return {
        ...state,
        dogsRender: [...reordered],
      };
    default:
      return { ...state };
  }
};

export default reducer;
