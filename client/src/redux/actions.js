import axios from "axios";
import {
  GET_ALL_DOGS,
  SEARCH_BY_NAME,
  RESET_SEARCH,
  GET_DETAIL,
  GET_TEMPERAMENTS,
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

export const resetSearch = () => {
  return {
    type: RESET_SEARCH,
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
