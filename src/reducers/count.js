import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

const Count = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}

export default Count;