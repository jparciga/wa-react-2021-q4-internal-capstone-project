export const PRODUCT_LIST_INITIAL_STATE = {
    currentPage: 1, 
    totalPages: 1, 
    filters: []
};

export default function ProductListReducer(state, action) {
    switch(action.type) {
        case 'set_initial_state': 
            return PRODUCT_LIST_INITIAL_STATE;    
        case 'set_values': {

            //we modify and return the "state" parameter instead of returning a new object to prevent the useEffect 
            //in useProductListAPI from triggering, thus causing an infinite loop.
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
            state.filters = action.payload.filters;
            return state;
        }
        case 'set_current_page':
            return { ...state, currentPage: action.currentPage };
        case 'next':
            return {
                ...state,
                currentPage: (state.currentPage < state.totalPages) ? state.currentPage + 1 : state.currentPage
            };
        case 'prev':
            return { 
                ...state,
                currentPage: (state.currentPage > 1) ? state.currentPage - 1 : state.currentPage
            };
        case 'first':
            return {
                ...state,
                currentPage: 1
            };
        case 'last':
        {    const last = {
                ...state,
                currentPage: state.totalPages
            };
            return last;
        }
        case 'modify_filter': 
            if(!state.filters.includes(action.categoryId))
                return { ...state, filters: [...state.filters, action.categoryId ]};
            else {         
                return { ...state, filters: state.filters.filter(x => x !== action.categoryId)} ;
        };
        case 'add_querystring': 
            {
                state.filters = [action.categoryId];
                return state;
            }
        case 'add_filter':
            {return { 
                ...state,
                filters: [...state.filters, action.payload]
            }}
        case 'remove_filter':
            return {
                ...state,
                filters: state.filters.filter(x => x !== action.payload)
            }

        case 'reset_filter':
            return {
                currentPage: state.currentPage, 
                totalPages: state.totalPages, 
                filters: []
            }
        default:
            return state;
    }
};
