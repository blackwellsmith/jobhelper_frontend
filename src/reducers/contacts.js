const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_CONTACTS":
            return action.index
        default:
          return state
    }
} 
