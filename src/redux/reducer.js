

export const reducer = (state={isOpen : false}, action) => {
    switch (action.type){
        case "OPEN_MODAL":
            return {...state, isOpen:action.payload}
        case "CLOSE_MODAL":
            return {...state, isOpen:action.payload}
        default:
            return state
    }
}