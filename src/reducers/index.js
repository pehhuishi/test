const initialState = {
  bars : [30,20,10]
}

const computeReducer = (state = initialState, action) => {
  if(action.type === 'ADD'){
    return {
      ...state, bars: state.bars + 10
    }
  }else if (action.type === 'SUBTRACT') {
    return {
      ...state, bars: state.bars - 10
    }
  }
  return state
}

export default computeReducer;