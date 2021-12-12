import ShopActionType from "./shops.types";

export const updateCollections = (collectionMap) => ({
  type: ShopActionType.UPDATE_COLLECTION,
  payload: collectionMap,
});
