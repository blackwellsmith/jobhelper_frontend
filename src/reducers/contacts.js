const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_CONTACTS":
            return action.index
        case "ADD_CONTACT":
            return [...state, action.contact]
        case "DELETE_CONTACT":
            const contacts = state.contacts.filter(c => c.id !== action.contact.id)
            return {...state, contacts}
        default:
          return state
    }
} 
