const initialState = {
    name: "",
    location: "",
    pay: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_JOB_GOAL":
            return action.formData
        default:
           return initialState
    }
}    
