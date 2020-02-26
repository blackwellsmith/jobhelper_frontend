const initialState = {
    email: "",
    password: "",
    name: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGN_UP":
            return action.formData
        default:
          return initialState
    }
} 
