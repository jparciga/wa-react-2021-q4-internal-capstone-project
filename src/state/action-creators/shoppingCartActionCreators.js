export const addToCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: "add_cart",
            payload: item
        });
    }
};

export const removeFromCart = (productId) => {
    return (dispatch) => {
        dispatch({
            type: "remove_cart",
            payload: productId
        });
    }
};

export const checkout = () => {
    return (dispatch) => {
        dispatch({
            type: "checkout"
        });
    }
};

export const clearCart = () => {
    return (dispatch) => {
        dispatch({
            type: "clear_cart"
        });
    }
};


