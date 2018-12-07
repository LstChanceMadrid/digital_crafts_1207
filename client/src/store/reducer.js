
const initialState = {
  passengerNumber : 0
}

const reducer = (state = initialState, action) => {
  // some stuff

  if (action.type === "USERNAME") {
    return {
      ...state,
      username : state.username + 1
    }
  }

  if (action.type === "BUTTON") {
    return {
      ...state,
      username : state.username
    }
  }

  if (action.type === "INC_PASSENGER") {
    return {
        ...state,
        passengerNumber : state.passengerNumber + 1
    }
}

if (action.type === "DEC_PASSENGER") {
    return {
        ...state,
        passengerNumber : state.passengerNumber - 1
    }
}

  return state
}

export default reducer;
