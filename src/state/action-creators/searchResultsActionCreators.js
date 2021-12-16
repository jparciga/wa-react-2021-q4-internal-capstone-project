//Search Result action creators
export const setInitialState = () => {
  return dispatch => {
    dispatch({
      type: 'sr_set_initial_state',
    })
  }
}

export const setValues = values => {
  return dispatch => {
    dispatch({
      type: 'sr_set_values',
      payload: values,
    })
  }
}

export const setCurrentPage = currentPage => {
  return dispatch => {
    dispatch({
      type: 'sr_set_current_page',
      payload: currentPage,
    })
  }
}

export const next = () => {
  return dispatch => {
    dispatch({
      type: 'sr_next',
    })
  }
}

export const prev = () => {
  return dispatch => {
    dispatch({
      type: 'sr_prev',
    })
  }
}

export const first = () => {
  return dispatch => {
    dispatch({
      type: 'sr_first',
    })
  }
}

export const last = () => {
  return dispatch => {
    dispatch({
      type: 'sr_last',
    })
  }
}
