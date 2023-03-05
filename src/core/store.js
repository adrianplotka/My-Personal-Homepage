import { configureStore } from "@reduxjs/toolkit";
import personalHomepageReducer from "../features/Homepage/personalHomepageSlice";
import createSagaMiddleware from "redux-saga";
import themeReducer from "../common/themeSlice"
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;