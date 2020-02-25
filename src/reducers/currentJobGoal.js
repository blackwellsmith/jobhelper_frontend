const initialstate = []

export default (state = initialstate , action) => {
    switch (action.type) {
        case "SET_CURRENT_JOB_GOAL":
            console.log(action.goal)
            return  action.goal 
        case "CLEAR_CURRENT_JOB_GOAL":
            return initialstate
        default:
            return state
    }
}