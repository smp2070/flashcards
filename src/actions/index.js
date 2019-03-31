export const addingDeck = name => ({ type: 'ADD_DECK', date: name });

export const addDeck = name => {
    return (dispatch, getState) => {
        dispatch(addingDeck(name));
        const { cards, decks } = getState();
        localStorage.setItem('state', JSON.stringify({cards, decks}));
    }
};

export const showAddDeck = () => ({ type: 'SHOW_ADD_DECK' });
export const hideAddDeck = () => ({ type: 'HIDE_ADD_DECK' });

export const settingCurrentDeckId = id => ({ type: 'SET_CURRENT_DECK_ID', id });

export const setCurrentDeckId = id => {
    return (dispatch, getState) => {
        dispatch(settingCurrentDeckId(id));
        const { addingDeck, ...rest } = getState();
        localStorage.setItem('state', JSON.stringify(rest));
    }
}

export const addCard    = card   => ({ type: 'ADD_CARD',    data: card   });
export const updateCard = card   => ({ type: 'UPDATE_CARD', data: card   });
export const deleteCard = cardId => ({ type: 'DELETE_CARD', data: cardId });

export const filterCards = query  => ({ type: 'FILTER_CARDS', data: query  });

