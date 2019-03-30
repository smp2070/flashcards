import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';

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
        const { decks, addingDeck } = this.props.store;
        return (
            <div className="sidebar">
                <h2>All Decks</h2>
                <button onClick={ e => this.props.onShowDeck() }>New Deck</button>
                <ul>
                    {decks.map((deck, i) => <li key={i}>{deck.name}</li>)}
                    {addingDeck && <input ref={el => this.addInput = el} onKeyPress={this.createDeck.bind(this)} />}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        store: state
    }
};
function mapDispathToProps(dispatch) {
    return {
        onAddDeck: name => dispatch(addDeck(name)),
        onShowDeck: () => dispatch(showAddDeck()),
        onHideDeck: () => dispatch(hideAddDeck())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Sidebar);