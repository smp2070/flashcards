import React from 'react';

function VisibleCards(props) {
    return (
        <div className="main">
            <h1>Deck Id {props.match.params.deckId}</h1>
            VisibleCards
        </div>
    )
}

export default VisibleCards;