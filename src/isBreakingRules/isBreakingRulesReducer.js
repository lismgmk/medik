
const initialState = {
    currentDoctor: [],
    allDoctorsWithoutCurrent: [],
    counter: 0,
    listLogsForCurrentDoctor: []
};

export const isBreakingRulesReducer =
    (state = initialState, action)=> {
        switch (action.type) {
            case "ISBREAKINGRULES/CURRENT-DOCTOR":
                return {...state, currentDoctor: action.data};
            case "ISBREAKINGRULES/ALL-DOCTORS":
                return {...state, allDoctorsWithioutCurrent: action.data};
            case "ISBREAKINGRULES/COUNTER":
                return {...state, counter: action.item};
            case "ISBREAKINGRULES/LIST-LOGS":
                return {...state, allDoctorsWithioutCurrent: action.data};
            default:
                return state;
        }
    };


// actions
export const actionsForisBreakingRules = {
    currentDoctor: (data) => ({type: "ISBREAKINGRULES/CURRENT-DOCTOR", data}),
    allDoctorsWithioutCurrent: (data) => ({type: "ISBREAKINGRULES/ALL-DOCTORS", data}),
    counter: (item) => ({type: "ISBREAKINGRULES/COUNTER", item}),
    listLogsForCurrentDoctor: (data) => ({type: "ISBREAKINGRULES/LIST-LOGS", data})
};

export const getListLogs = () => {
    return (
        (dispatch, getState) => {
            console.log(getState)

            // dispatch(actionsForWorkLog.loading(true))
            // getWorklog()
            //     .then(data =>{
            //         console.log(data)
            //         dispatch(actionsForWorkLog.getWorkLogs(data))
            //         dispatch(actionsForWorkLog.loading(false))
            //     })
        }
    )
}

