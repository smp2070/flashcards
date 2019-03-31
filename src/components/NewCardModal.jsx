import CardModal from './CardModal';
import { connect } from 'react-redux';
import { addCard } from '../actions';

const mapStateToProps = (state, { match } ) => ({
    card: match.params.deckId
});

const mapDispatchToProps = (dispatch) => ({
    onSave: card => dispatch(addCard(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
