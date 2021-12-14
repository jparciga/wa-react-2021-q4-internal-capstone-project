export const SEARCH_RESULTS_INITIAL_STATE = {
    amountItems: 0,
    items: []
};

export default function shoppingCartReducer(state = SEARCH_RESULTS_INITIAL_STATE, action) {
    switch(action.type) {
        case "add_cart":
            //payload: { item: { id, name, qty, stock }} 

            if(state.items.some((item) => item.id === action.payload.id)) {
                const elementIndex = state.items.findIndex((item) => item.id === action.payload.id);
                let newArray = [...state.items];
                
                const newItem = { ...newArray[elementIndex], 
                    quantity: (newArray[elementIndex].quantity + action.payload.quantity <= newArray[elementIndex].stock)  
                    ? newArray[elementIndex].quantity + action.payload.quantity 
                    : newArray[elementIndex].quantity
                };
                
                newArray[elementIndex] = newItem;
                
                return { 
                    amountItems: state.amountItems,
                    items: newArray
                }
            } 

            return { 
                amountItems: state.amountItems + 1,
                items: [...state.items, action.payload]
            }
        case "remove_cart":{
            //payload: productId 
            if(state.amountItems > 0)
            {
                return { 
                    amountItems: state.amountItems - 1,
                    items: state.items.filter(x => x.id !== action.payload)
                }
            }
            return state;
        }
        case "change_quantity": {
            const elementIndex = state.items.findIndex((item) => item.id === action.payload.productId);
            let newArray = [...state.items];
            newArray[elementIndex] = { ...newArray[elementIndex], quantity: action.payload.quantity }

            return { 
                amountItems: state.amountItems,
                items: newArray
            }
        }
        case "checkout":
        case "clear_cart":
            return SEARCH_RESULTS_INITIAL_STATE;
        default:
            return state;
    }

}