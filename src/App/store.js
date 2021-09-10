import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {employesReducer} from "../Employes/employesReducer";
import {worklogReducer} from "../Worklog/worklogReducer";


const rootReducer = combineReducers({
    employes: employesReducer,
    worklog: worklogReducer
});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

