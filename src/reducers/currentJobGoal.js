export default (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_JOB_GOAL":
            return action.goal
        default:
            return state
    }
}