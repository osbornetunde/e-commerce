import shopActionsTypes from "./shopActionsTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";

export const fetchCollectionsStart = () => ({
  type: shopActionsTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: shopActionsTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (error) => ({
  type: shopActionsTypes.FETCH_COLLECTION_FAILURE,
  payload: error,
});
export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());
  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    })
    .catch((err) => dispatch(fetchCollectionFailure(err)));
};
