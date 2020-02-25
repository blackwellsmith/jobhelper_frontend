const initialState = {
    name: "",
    company: "",
    position: "",
    contact_info: ""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_CONTACT_FORM":
            return action.formData
        default:
          return initialState
    }
}  