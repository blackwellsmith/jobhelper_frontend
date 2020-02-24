export default (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_JOB_GOAL":
            return action.goal
        case "CLEAR_CURRENT_JOB_GOAL":
            return null
        default:
            return state
    }
}