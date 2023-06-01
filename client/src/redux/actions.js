import axios from "axios";
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

export const getAllDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/dogs");
      return dispatch({
        type: GET_ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDogByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/dogs/name?name=${name}`
      );
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: error.response.data,
      });
    }
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/temperaments");
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const postDog = (newDog) => {
  console.log("Action: ", newDog); //BORRAR
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3001/dogs", newDog);
      return dispatch({
        type: POST_DOG,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data); // BORRAR
      return dispatch({
        type: POST_DOG,
        payload: error.response.data,
      });
    }
  };
};

export const orderBy = (order) => {
  return (dispatch) => {
    return dispatch({
      type: ORDER_BY,
      payload: order,
    });
  };
};

export const temperamentFilter = (temp) => {
  return (dispatch) => {
    return dispatch({
      type: TEMPERAMENT_FILTER,
      payload: temp,
    });
  };
};

export const sourceFilter = (source) => {
  return (dispatch) => {
    return dispatch({
      type: SOURCE_FILTER,
      payload: source,
    });
  };
};

export const setCurrentPage = (page) => {
  return (dispatch) => {
    return dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });
  };
};
