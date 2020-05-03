import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShops = (state) => state.shops;

export const selectShop = createSelector([selectShops], (shops) => shops.shop);

export const selectCollection = (collectionUrlParams) =>
  createSelector([selectShop], (shops) =>
    shops.find((shop) => shop.id === COLLECTION_ID_MAP[collectionUrlParams])
  );
