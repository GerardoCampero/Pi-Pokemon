import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducer';

//Primera opción con el compose:
const composeRedux = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeRedux(applyMiddleware(thunk)))


export default store;