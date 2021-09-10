import {getEmployees, getWorklog} from "../Api/api";

const initialState = {
    worklogs: [],
    loading: false,
    doctorsName: '',
    doctorsId: 0
};

export const worklogReducer =
    (state = initialState, action)=> {
        switch (action.type) {
            case "WORKLOG/GET-WORKLOGS":
                return {...state, worklogs: action.data};
            case "WORKLOG/LOADING":
                return {...state, loading: action.flag};
                case "WORKLOG/DOCTORS-NAME":
                return {...state, doctorsName: action.name};
                case "WORKLOG/DOCTORS-ID":
                return {...state, doctorsId: action.id};
            default:
                return state;
        }
    };


// actions
export const actionsForWorkLog = {
    getWorkLogs: (data) => ({type: "WORKLOG/GET-WORKLOGS", data}),
    loading: (flag) => ({type: "WORKLOG/LOADING", flag}),
    doctorsName: (name) => ({type: "WORKLOG/DOCTORS-NAME", name}),
    doctorsId: (id) => ({type: "WORKLOG/DOCTORS-ID", id}),
};

export const getAllWorklogs = () => {
    return (
        (dispatch) => {
            dispatch(actionsForWorkLog.loading(true))
            getWorklog()
                .then(data =>{
                    console.log(data)
                    data.map(i=>{
                        return {...i, counter: 0}
                    })
                    dispatch(actionsForWorkLog.getWorkLogs( data.map(i=>{
                        return {...i, counter: 0}
                    })))
                    dispatch(actionsForWorkLog.loading(false))
                })
        }
    )
}

