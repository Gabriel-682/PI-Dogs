import {
  GET_ALL_DOGS,
  SEARCH_BY_NAME,
  RESET_SEARCH,
  GET_DETAIL,
  GET_TEMPERAMENTS,
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
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
