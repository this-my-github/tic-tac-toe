import PropTypes from 'prop-types';
import { InformationLayout } from './information-layout';

export const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.string,
	isDraw: PropTypes.string,
};
