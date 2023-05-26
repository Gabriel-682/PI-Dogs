import { GET_ALL_DOGS, SEARCH_BY_NAME } from "./actionsTypes";

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
      if (payload) {
        return {
          ...state,
          dogsRender: state.allDogs.filter((dog) =>
            payload.includes(dog.id) ? dog : null
          ),
        };
      } else {
        return { ...state, dogsRender: state.allDogs };
      }
    default:
      return { ...state };
  }
};

export default reducer;
