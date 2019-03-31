import { updateCard, deleteCard } from '../actions';
import { connect } from 'react-redux';
import CardModal from './CardModal';

const mapStateToProps = ({ cards }, { match: { params: { cardId }}}) => ({
    card: cards.filter(card => card.id === +cardId)[0]
});

const mapDispatchToProps = dispatch => ({
    onSave:   card   => dispatch(updateCard(card)),
    onDelete: cardId => dispatch(deleteCard(cardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);