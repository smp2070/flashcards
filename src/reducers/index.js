
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });
            return Object.assign({}, state, {
                cards: state.cards.concat([newCard])
            });
        default:
            return state;
    }
}

export default reducer;