import { combineReducers } from 'redux';

const showBack = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_BACK':
            return action.data || false;
        default:
            return state;
    }
}

const cardFilter = (state = [], action) => {
    switch (action.type) {
        case 'FILTER_CARDS':
            return action.data;
        default:
            return state;
    }
}

const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                {
                    ...action.data,
                    score: 1,
                    id: +new Date()
                }
            ];
        case 'UPDATE_CARD':
            return state.map(card => card.id !== action.data.id ? card : action.data);
        case 'DELETE_CARD':
            return state.filter(card => card.id !== action.data.id); // ? action.data ?
        default:
            return state;
    }
};

const decks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DECK':
            return [
                ...state,
                {
                    name: action.date,
                    id: +new Date()
                }
            ]
        default:
            return state;
    }
};

const addingDeck = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        default: return state;
    }
};

const currentDeckId = (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_DECK_ID': return action.id;
        default: return state;
    }
};

const reducer = combineReducers({
    cards,
    decks,
    addingDeck,
    currentDeckId,
    cardFilter,
    showBack
});

export default reducer;