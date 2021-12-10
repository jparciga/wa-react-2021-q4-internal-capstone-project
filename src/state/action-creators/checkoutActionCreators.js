export const setCheckoutSummary = (values) => {
    return (dispatch) => {
        dispatch({
            type: "set_checkout_summary",
            payload: values
        });
    }
};

export const clearCheckoutSummary = () => {
    return (dispatch) => {
        dispatch({
            type: "clear_checkout_summary",
        });
    }
};