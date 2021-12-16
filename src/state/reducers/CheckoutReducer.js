export const CHECKOUT_INITIAL_STATE = {
  summary: [],
}

export default function checkoutReducer(
  state = CHECKOUT_INITIAL_STATE,
  action,
) {
  switch (action.type) {
    case 'set_checkout_summary':
      return {...action.payload}
    case 'clear_checkout_summary':
      return CHECKOUT_INITIAL_STATE
    default:
      return state
  }
}
