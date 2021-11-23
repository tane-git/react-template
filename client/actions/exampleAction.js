export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

export function exampleAction () {
  return {
    type: EXAMPLE_ACTION,
    payload: {
      message: 'Example action'
    }
  }
}
