
const initialState = {
  username: "",
}

const reducer = (state = initialState, action) => {
  // some stuff

  if (action.type === "CURRENT_USER") {
    console.log('reducer')
    return {
      ...state,
      username : action.username
    }
  }

  if (action.type === "BUTTON") {
    return {
      ...state,
      username : state.username
    }
  }

  return state
}

export default reducer;
