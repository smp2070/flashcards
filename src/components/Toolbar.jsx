import React from 'react';
import { showAddDeck, filterCards } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
    deckId: state.currentDeckId
});

const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck()),
    onFilter: query => dispatch(filterCards(query))
});

const Toolbar = (props) => {
    const { showAddDeck, deckId, onFilter } = props;
    const deckTools = deckId && (
        <div className="buttons">
            <Link to={`/deck/${deckId}/new`} className="btn fifth">+ New Card</Link>
            <Link to={`/deck/${deckId}/study`} className="btn fifth">Study Deck</Link>
            <input
                onChange={e => onFilter(e.target.value)}
                className="search"
                type="search"
                placeholder="Search Deck..."
            />
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