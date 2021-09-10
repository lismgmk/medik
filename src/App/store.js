import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {employesReducer} from "../Employes/employesReducer";
import {worklogReducer} from "../Worklog/worklogReducer";
import {isBreakingRulesReducer} from "../isBreakingRules/isBreakingRulesReducer";


const rootReducer = combineReducers({
    employes: employesReducer,
    worklog: worklogReducer,
    isBreakingRules: isBreakingRulesReducer
});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

