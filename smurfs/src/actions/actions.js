import axios from "axios";

export const ADD_SMURF = "ADD SMURF";
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const addSmurf = (data) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_SMURF, payload: res });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_SMURFS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_ERROR,
          payload: "Could not fetch data from the api",
        });
      });
  }, 2000);
};
