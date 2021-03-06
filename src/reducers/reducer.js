const initialState = {
  app: {
    login: false
  },
  characters: [],
  parties: [],
  char_creation: {
    progress: 0,
    basic_info: {
      edit: true,
      name: "",
      race: "",
      subrace: "",
      class: "",
      subclass: ""
    }
  }
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