const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_JOURNAL":
            return action.index
        default:
          return state
    }
} 