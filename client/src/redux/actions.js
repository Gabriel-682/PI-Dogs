import axios from "axios";
import { GET_ALL_DOGS, SEARCH_BY_NAME } from "./actionsTypes";

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
      console.log(error.response.data);
    }
  };
};
