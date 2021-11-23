import { EXAMPLE_ACTION } from '../actions/exampleAction'

function exampleReducer (state = {}, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return action.payLoad

    default:
      return state
  }
}

export default exampleReducer
