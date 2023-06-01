import {
  GET_ALL_DOGS,
  SEARCH_BY_NAME,
  GET_DETAIL,
  GET_TEMPERAMENTS,
  ORDER_BY,
  TEMPERAMENT_FILTER,
  SOURCE_FILTER,
  SET_CURRENT_PAGE,
  POST_DOG,
} from "./actionsTypes";

const initialState = {
  dogsRender: [],
  temperaments: [],
  newDataBaseDog: [],
  dogsPerPage: 8,
  currentPage: 1,
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
    case SOURCE_FILTER:
      let sourceFilter = [];
      if (payload === "api")
        sourceFilter = state.dogsRender.filter(
          (dog) => typeof dog.id === "number"
        );
      if (payload === "dataBase")
        sourceFilter = state.dogsRender.filter(
          (dog) => typeof dog.id === "string"
        );
      if (!sourceFilter.length)
        sourceFilter = {
          error: "No hay razas creadas. Puede crear una raza.",
        };
      return {
        ...state,
        dogsRender: sourceFilter,
      };
    case TEMPERAMENT_FILTER:
      const tempFiltered = state.dogsRender.filter((dog) =>
        dog.Temperaments?.find((temp) => temp.name === payload) ? dog : null
      );
      return {
        ...state,
        dogsRender: [...tempFiltered],
      };
    case ORDER_BY:
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
    case POST_DOG:
      return {
        ...state,
        newDataBaseDog: payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
