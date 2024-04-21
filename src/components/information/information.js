import PropTypes from 'prop-types';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.string,
	isDraw: PropTypes.string,
};

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<h1>
			{isDraw === true
				? 'Ничья'
				: isGameEnded === true
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</h1>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.string,
	isDraw: PropTypes.string,
};
