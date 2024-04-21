import PropTypes from 'prop-types';
import { FieldLayout } from './field-layout';

export const FieldContainer = ({
	currentPlayer,
	isGameEnded,
	field,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
	makeStep,
	resetGame,
}) => {
	return <FieldLayout field={field} makeStep={makeStep} resetGame={resetGame} />;
};

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.string,
	field: PropTypes.array,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
};
