import PropTypes from 'prop-types';

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
