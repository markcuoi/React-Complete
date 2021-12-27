import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import ShopActionType from "./shops.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsStartAsync() {
  try {
    // get a reference to the collections collection
    const collectionRef = firestore.collection("collections");
    // returns a promise when promise is resolve, we get snapshot that consist of a number of individual documents (snapshot.docs)
    // each document, we can get the id as a separate property, and the rest of the data using the .data()
    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // console.log(
    //   "🚀 ~ file: shop.sagas.js ~ line 26 ~ function*fetchCollectionsStartAsync ~ collectionsMap",
    //   collectionsMap
    // );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionType.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
