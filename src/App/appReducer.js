import {getEmployees} from "../Api/api";

const initialState = {
    emploues: [],
    loading: false
};

export const appReducer =
    (state = initialState, action)=> {
        switch (action.type) {
            case "APP/GET-EMPLOUES":
                return {...state, emploues: action.data};
                case "APP/LOADING":
                return {...state, loading: action.flag};
            default:
                return state;
        }
    };


// actions
export const actionsForApp = {
    getEmploues: (data) => ({type: "APP/GET-EMPLOUES", data}),
    loading: (flag) => ({type: "APP/LOADING", flag}),
};


//thunk
export const getAllEmploues = () => {
    return (
        (dispatch) => {
          return  getEmployees()
                .then(data =>{
                    console.log(data)
                    dispatch(actionsForApp.getEmploues(data))
                    return Promise.resolve()
                })
        }
    )
}
// export const getAllEmploues = () => {
//     return (
//         (dispatch) => {
//             dispatch(actionsForApp.loading(true))
//             getEmployees()
//                 .then(data =>{
//                     console.log(data)
//                     dispatch(actionsForApp.getEmploues(data))
//                     dispatch(actionsForApp.loading(false))
//                 })
//         }
//     )
// }

