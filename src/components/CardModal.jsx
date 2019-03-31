import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class CardModal extends Component {
    componentDidUpdate() {
        this.front.focus();
    }
    onSave(event) {
        console.log('CardModal props', this.props);
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
        return (
            <div className="modal">
                <div className="modal-content">
                    <h1>{onDelete ? "Edit" : "New"} Card</h1>
                    <label>Card Front:</label>
                    <textarea ref={el => this.front = el} defaultValue={card.front}></textarea>
                    <label>Card Back:</label>
                    <textarea ref={el => this.back = el} defaultValue={card.back}></textarea>
                    <p className="modal-bottom">
                        <button onClick={this.onSave.bind(this)} className="btn fifth">Save Card</button>
                        <Link className="btn fifth" to={`/deck/${card.deckId}`}>Cancel</Link>
                        { onDelete && <button onClick={this.onDelete.bind(this)} className="delete btn">Delete Card</button>}
                    </p>
                </div>
            </div>
        )
    }
};

export default withRouter(CardModal);