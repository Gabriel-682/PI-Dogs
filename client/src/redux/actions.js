import axios from "axios";
import { GET_ALL_DOGS } from "./actionsTypes";

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
