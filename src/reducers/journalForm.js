const initialState = {
    entry: "",
    meetups: "",
    study: "",
    applications: "",
    goals: ""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_JOURNAL_FORM":
            return action.formData
        default:
          return initialState
    }
}  