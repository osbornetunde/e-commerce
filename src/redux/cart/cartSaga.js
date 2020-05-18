import { takeLatest, call, put, all } from "redux-saga/effects";
import userActionTypes from "../user/userActionTypes";
import { clearCart } from "./cartActions";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
