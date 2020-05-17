import shopActionsTypes from "./shopActionsTypes";

export const updateCollections = (collectionsMap) => ({
  type: shopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
