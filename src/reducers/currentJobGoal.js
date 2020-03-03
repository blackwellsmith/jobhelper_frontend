const initialstate = null

export default (state = initialstate , action) => {
    switch (action.type) {
        case "SET_CURRENT_JOB_GOAL":
            return  action.goal 
        case "CLEAR_CURRENT_JOB_GOAL":
            return initialstate
        default:
            return state
    }
}
