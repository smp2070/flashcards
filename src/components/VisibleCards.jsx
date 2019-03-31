import React from 'react';
import { Route } from 'react-router-dom';
import NewCardModal from './NewCardModal';
import EditCardModal from './EditCardModal';
import StudyModal from './StudyModal';
import Card from './Card';
import { connect } from 'react-redux';
import fuzzysearch from 'fuzzysearch';

const matches = (filter, card) => fuzzysearch(filter, card.front) || fuzzysearch(filter, card.back);

function VisibleCards(props) {
    return (
        <div className="main">
            {props.cards.map(card => <Card card={card} key={card.id} />)}
            <Route path="/deck/:deckId/new" component={NewCardModal}/>
            <Route path="/deck/:deckId/edit/:cardId" component={EditCardModal}/>
            <Route path="/deck/:deckId/study" component={StudyModal}/>
        </div>
    )
};
function mapStateToProps({cards, cardFilter}, { match: { params: {deckId}}}) {
    return {
        cards: cards.filter(c => c.deckId === deckId && matches(cardFilter, c))
    }
}

export default connect(mapStateToProps)(VisibleCards);