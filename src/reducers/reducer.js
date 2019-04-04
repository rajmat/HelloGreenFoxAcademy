const initState = {
  number: 0
}

const myReducer = (state = initState, action = '') => {
  if (action.type === 'BUY_ACORN') {
    return {
      ...state,
      number: state.number + action.count
    }
  } else if (action.type === 'EAT_ACORN') {
    return {
      ...state,
      number: Math.max(state.number - action.count, 0)
    }
  } else {
    return state;
  }
}

export default myReducer
