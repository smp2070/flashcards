import React from 'react';
import { Route } from 'react-router-dom';
import NewCardModal from './NewCardModal';

function VisibleCards(props) {
    // console.log('VisibleCards', props);
    return (
        <div className="main">
            <h1>Deck Id {props.match.params.deckId}</h1>
            VisibleCards
            <Route path="/deck/:deckId/new" component={NewCardModal}/>
            {/* {props.children} */}
        </div>
    )
}

export default VisibleCards;