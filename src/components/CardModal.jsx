import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class CardModal extends Component {
    componentDidUpdate() {
        this.front.focus();
    }
    onSave(event) {
        this.props.onSave({
            ...this.props.card,
            front: this.front.value,
            back: this.back.value
        });
        this.props.history.push(`/deck/${this.props.card.deckId}`);
    }
    onDelete(event) {
        this.props.onDelete(this.props.card.id);
        this.props.history.push(`/deck/${this.props.card.deckId}`);
    }
    render() {
        const { card, onDelete } = this.props;
        
        console.log('props ', this.props);
        // console.log('cardModal:  ', this.props.card);
        return (
            <div className="modal">
                <h1>{onDelete ? "Edit" : "New"} Card</h1>
                <label>Card Front:</label>
                <textarea ref={el => this.front = el} defaultValue={card.front}></textarea>
                <label>Card Back:</label>
                <textarea ref={el => this.back = el} defaultValue={card.back}></textarea>
                <p>
                    <button onClick={this.onSave}>Save Card</button>
                    <Link className="btn" to={`deck/${card.deckId}`}>Cancel</Link>
                    { onDelete && <button onClick={this.onDelete} className="delete">Delete Card</button>}
                </p>
            </div>
        )
    }
};

export default withRouter(CardModal);