const initialState = {
  isOpen: false,
  selectedListing: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isOpen: true, selectedListing: action.payload };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false, selectedListing: null };
    default:
      return state;
  }
}
