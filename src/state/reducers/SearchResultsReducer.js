export const SEARCH_RESULTS_INITIAL_STATE = {
    currentPage: 1, 
    totalPages: 1, 
};

export default function searchResultsReducer(state = SEARCH_RESULTS_INITIAL_STATE, action) {
    switch(action.type) {
        case 'sr_set_initial_state':
            return SEARCH_RESULTS_INITIAL_STATE;
        case 'sr_set_values': {
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;      
            return state;
        }
        case 'sr_set_current_page':
            return { ...state, currentPage: action.payload };
        case 'sr_next':
            return {
                ...state,
                currentPage: (state.currentPage < state.totalPages) ? state.currentPage + 1 : state.currentPage
            };
        case 'sr_prev':
            return { 
                ...state,
                currentPage: (state.currentPage > 1) ? state.currentPage  - 1 : state.currentPage
            };
        case 'sr_first':
            return {
                ...state,
                currentPage: 1
            };
        case 'sr_last':
        {    const last = {
                ...state,
                currentPage: state.totalPages
            };
            return last;
        }
        default:
            return state;
    };
};
