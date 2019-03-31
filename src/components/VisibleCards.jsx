import React from 'react';
import { Route } from 'react-router-dom';
import NewCardModal from './NewCardModal';
import EditCardModal from './EditCardModal';
import Card from './Card';
import { connect } from 'react-redux';

function VisibleCards(props) {
    return (
        <div className="main">
            {props.cards.map(card => <Card card={card} key={card.id} />)}
            <Route path="/deck/:deckId/new" component={NewCardModal}/>
            <Route path="/deck/:deckId/edit/:cardId" component={EditCardModal}/>
        </div>
    )
};
function mapStateToProps({cards}, { match: { params: {deckId}}}) {
    return {
        cards: cards.filter(c => c.deckId === deckId)
    }
}

export default connect(mapStateToProps)(VisibleCards);