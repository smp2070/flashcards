import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck, setCurrentDeckId } from '../actions';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    componentDidUpdate() {
        this.addInput && this.addInput.focus();
    }
    createDeck(evt) {
        if (evt.which !== 13) return;
        
        const name = this.addInput.value;
        this.props.onAddDeck(name);
        this.props.onHideDeck();
    }
    render() {
        const { decks, addingDeck, onShowDeck, setCurrentDeckId } = this.props;

        return (
            <div className="sidebar">
                <h2>All Decks</h2>
                <button className="btn fifth" onClick={ e => onShowDeck() }>New Deck</button>
                <ul>
                    {decks.map((deck, i) => (
                        <li key={i}>
                            <Link to={`/deck/${deck.id}`} onClick={() => setCurrentDeckId(deck.id)}>{deck.name}</Link>
                        </li>
                    ))}
                    {addingDeck && <input ref={el => this.addInput = el} onKeyPress={this.createDeck.bind(this)} />}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state,
        decks: state.decks,
        addingDeck: state.addingDeck
    }
};

function mapDispathToProps(dispatch) {
    return {
        onAddDeck: name => dispatch(addDeck(name)),
        onShowDeck: () => dispatch(showAddDeck()),
        onHideDeck: () => dispatch(hideAddDeck()),
        setCurrentDeckId: id => dispatch(setCurrentDeckId(id))
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Sidebar);