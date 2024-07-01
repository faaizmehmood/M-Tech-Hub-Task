import { combineReducers } from "redux";
import CounterReducer from "./counter/CounterReducer";
import UserReducer from "./users/UserReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    user: UserReducer
})

export default rootReducer;  