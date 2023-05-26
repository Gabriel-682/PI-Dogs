import { GET_ALL_DOGS, SEARCH_BY_NAME } from "./actionsTypes";

const initialState = {
  allDogs: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        allDogs: state.allDogs.filter((dog) =>
          payload.includes(dog.id) ? dog : null
        ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
