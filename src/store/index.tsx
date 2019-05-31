import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { createBrowserHistory } from "history";
const store = createStore(rootReducer);
export default store;

export const history = createBrowserHistory()