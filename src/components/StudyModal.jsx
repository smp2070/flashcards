import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCard, setShowBack } from '../actions';

const StudyModal = (props) => {

    const { card, showBack, onFlip, onStudied, deckId } = props;

    let body = (
        <div className="no-cards">
            <p>You have no cards to study in this deck right now. Good job!</p>
        </div>
    );

    if (card) {
        body = (
            <div className="study-card">
                <div className={ showBack ? 'front hide' : 'front' }>
                    <div style={{textAlign: 'center', margin: 20}}>
                        <b style={{fontSize: 20}}>{card.front}</b>
                    </div>
                    <button className="btn fifth" onClick={onFlip}>Flip</button>
                </div>
                <div className={ showBack ? 'back': 'back hide'}>
                    <div style={{textAlign: 'center', margin: 20}}>
                        <b style={{fontSize: 20}}>{card.back}</b>
                    </div>
                    <p style={{textAlign: "center", margin: '15px 0'}}>How did you do?</p>
                    <p style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button className="btn fifth" onClick={e => onStudied(card.id, Math.max(card.score - 1, 1))}>Poorly</button>
                        <button className="btn fifth" onClick={e => onStudied(card.id, card.score)}>Okay</button>
                        <button className="btn fifth" onClick={e => onStudied(card.id, Math.min(card.score + 1, 3))}>Great</button>
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className='modal study-modal'>
            <div className='modal-content'>
                <Link className="close" to={`/deck/${deckId}`} />
                {body}
            </div>
        </div>
    )
};

const MS_IN_DAY = 86400000;

const mapStateToProps = ({cards, showBack}, { match: {params: {deckId}}}) => ({
    showBack,
    deckId,
    card: cards.filter(card => {
        return card.deckId === deckId && (!card.lastStudiedOn || (new Date() - card.lastStudiedOn) / MS_IN_DAY >= card.score )
    })[0]
});

const mapDispatchToProps = dispatch => ({
    onStudied: (cardId, score) => {
        let now = new Date();
        now.setHours(0,0,0,0);
        dispatch(updateCard({ id: cardId, score, lastStudiedOn: +now }));
        dispatch(setShowBack());
    },
    onFlip: () => dispatch(setShowBack(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudyModal);