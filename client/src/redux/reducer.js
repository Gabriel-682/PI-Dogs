import {
  GET_ALL_DOGS,
  SEARCH_BY_NAME,
  RESET_SEARCH,
  GET_DETAIL,
} from "./actionsTypes";

const initialState = {
  allDogs: [],
  dogsRender: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: payload,
        dogsRender: payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        dogsRender: payload,
      };
    case RESET_SEARCH:
      return {
        ...state,
        dogsRender: state.allDogs,
      };
    case GET_DETAIL:
      return {
        ...state,
        dogsRender: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
