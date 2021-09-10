import {getEmployees} from "../Api/api";

const initialState = {
    employes: [],
    loading: false
};

export const employesReducer =
    (state = initialState, action)=> {
        switch (action.type) {
            case "EMPLOYES/GET-EMPLOYES":
                return {...state, employes: action.data};
                case "EMPLOYES/LOADING":
                return {...state, loading: action.flag};
            default:
                return state;
        }
    };


// actions
export const actionsForEmployes = {
    getEmployes: (data) => ({type: "EMPLOYES/GET-EMPLOYES", data}),
    loading: (flag) => ({type: "EMPLOYES/LOADING", flag}),
};


//thunk
export const getAllEmployes = () => {
    return (
        (dispatch) => {
            dispatch(actionsForEmployes.loading(true))
            getEmployees()
                .then(data =>{
                    dispatch(actionsForEmployes.getEmployes(data))
                    dispatch(actionsForEmployes.loading(false))
                })
        }
    )
}

