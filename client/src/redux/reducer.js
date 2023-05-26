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
      return {
        ...state,
        dogsRender: state.allDogs.filter((dog) =>
          payload.includes(dog.id) ? dog : null
        ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
