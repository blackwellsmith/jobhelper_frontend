const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_CONTACTS":
            return action.index
        case "ADD_CONTACT":
            return [...state, action.contact]
        case "DELETE_CONTACT":
            console.log(action.contact)
            console.log([...state])
            console.log([ ...state.filter(contact => contact.id !== action.contact)])
            //const contacts = 
            return [ ...state.filter(contact => contact.id !== action.contact)]
        default:
          return state
    }
} 
