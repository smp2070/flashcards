import { combineReducers } from 'redux';

let initialState = {
    // cards: [],
};

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
            ]
            // return {
            //     ...state,
            //     cards: [
            //         ...state.cards,
            //         {
            //             ...action.data,
            //             score: 1,
            //             id: +new Date()
            //         }
            //     ]
            // }
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

const currentDeckId = (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_DECK_ID': return action.id;
        default: return state;
    }
}


const reducer = combineReducers({
    cards,
    decks,
    addingDeck,
    currentDeckId
})

export default reducer;