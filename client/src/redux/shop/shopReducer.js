import shopActionsTypes from "./shopActionsTypes";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionsTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopActionsTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
