export const setInitialState = () => {
    return (dispatch) => {
        dispatch({
            type: "set_initial_state"
        });
    }
};

export const setValues = (values) => {
    return (dispatch) => {
        dispatch({
            type: "set_values",
            payload: values
        });
    }
};

export const setCurrentPage = (currentPage) => {
    return (dispatch) => {
        dispatch({
            type: "set_current_page",
            payload: currentPage
        });
    }
};

export const next = () => {
    return (dispatch) => {
        dispatch({
            type: "next"
        });
    }
};

export const prev = () => {
    return (dispatch) => {
        dispatch({
            type: "prev"
        });
    }
};


export const first = () => {
    return (dispatch) => {
        dispatch({
            type: "first"
        });
    }
};

export const last = () => {
    return (dispatch) => {
        dispatch({
            type: "last"
        });
    }
};

export const modifyFilter = (categoryId) => {
    return (dispatch) => {
        dispatch({
            type: "modify_filter",
            payload: categoryId
        });
    }
};

export const addQueryString = (categoryId) => {
    return (dispatch) => {
        dispatch({
            type: "add_querystring",
            payload: categoryId
        });
    }
};

export const resetFilter = () => {
    return (dispatch) => {
        dispatch({
            type: "reset_filter"
        });
    }
};