const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_CONTACTS":
            return action.index
        case "ADD_CONTACT":
            
            return [...state, action.contact ]
            
                  
            
        default:
          return state
    }
} 
