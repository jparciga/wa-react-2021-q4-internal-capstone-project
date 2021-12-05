export const SEARCH_RESULTS_INITIAL_STATE = {
    currentPage: 1, 
    totalPages: 1, 
};

export default function searchResultsReducer(state = SEARCH_RESULTS_INITIAL_STATE, action) {
    switch(action.type) {
        case 'set_initial_state':
            return SEARCH_RESULTS_INITIAL_STATE;
        case 'set_values': {
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;      
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
        default:
            return state;
    };
};
