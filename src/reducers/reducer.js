const initialState = {
    parties: []
  }
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_PARTY": 
        return { ...state, parties: [...state.parties, action.data] };
      default:
        return state;
    }
  };
  
  export default rootReducer;