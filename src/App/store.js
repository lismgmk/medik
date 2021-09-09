import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    app: appReducer
    // employes: employesReducer,
    // worklog: worklogReducer,
    // isBreakingRules: isBreakingRulesReducer,
});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

