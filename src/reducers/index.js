import { combineReducers } from 'redux';
// import { addDeck, showAddDeck, hideAddDeck } from '../actions';

let initialState = {
    cards: [],
};

const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        ...action.data,
                        score: 1,
                        id: +new Date()
                    }
                ]
            }
        default:
            return state;
    }
}

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
}
const addingDeck = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        default: return state;
    }
}

const reducer = combineReducers({
    cards,
    decks,
    addingDeck
})

export default reducer;