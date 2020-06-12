import {
  ADD_SMURF,
  FETCH_DATA,
  UPDATE_SMURFS,
  SET_ERROR,
} from "../actions/actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  error: "",
};

const SmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        smurfs: action.payload.data,
      };
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
      };

    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
      };

    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SmurfReducer;
