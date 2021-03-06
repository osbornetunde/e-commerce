import { createSelector } from "reselect";

const selectShops = (state) => state.shops;

export const selectShop = createSelector(
  [selectShops],
  (shops) => shops.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShop],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParams) =>
  createSelector([selectShop], (collections) =>
    collections ? collections[collectionUrlParams] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShops],
  (shops) => shops.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShops],
  (shop) => !!shop.collections
);
