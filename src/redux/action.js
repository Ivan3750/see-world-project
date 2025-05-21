export const OpenModal = (isOpen) =>({
    type: "OPEN_MODAL",
    payload: isOpen
})

export const CloseModal = (isOpen) =>({
    type: "CLOSE_MODAL",
    payload: isOpen
})