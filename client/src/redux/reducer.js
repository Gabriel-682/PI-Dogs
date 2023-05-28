import { GET_ALL_DOGS, SEARCH_BY_NAME, RESET_SEARCH } from "./actionsTypes";

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
      if (payload.error) {
        return {
          ...state,
          dogsRender: payload,
        };
      } else {
        return {
          ...state,
          dogsRender: state.allDogs.filter((dog) =>
            payload.includes(dog.id) ? dog : null
          ),
        };
      }
    case RESET_SEARCH:
      return {
        ...state,
        dogsRender: state.allDogs,
      };
    default:
      return { ...state };
  }
};

export default reducer;
