import { all } from "redux-saga/effects";
import { themeSaga } from "../common/themeSaga";
import { personalHomepageSaga } from "../features/Homepage/personalHompageSaga";

export default function* saga() {
    yield all([
        personalHomepageSaga(),
        themeSaga(), 
    ]);
}
