import React from 'react';
import { showAddDeck } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
    deckId: state.currentDeckId
});
const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck())
});

const Toolbar = (props) => {
    const { showAddDeck, deckId } = props;
    const deckTools = deckId && (
        <div className="buttons">
            <Link to={`/deck/${deckId}/new`} className="btn fifth">+ New Card</Link>
            <Link to={`/deck/${deckId}/study`} className="btn fifth">Study Deck</Link>
        </div>
    );
    return (
        <div className="toolbar">
            <div>
                <button className="btn fifth" onClick={showAddDeck}>+ New Deck</button>
            </div>
            {deckTools}
        </div>
    )
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar));