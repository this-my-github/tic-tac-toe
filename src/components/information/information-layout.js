import PropTypes from 'prop-types';
import { GAME_STATE, PLAYER } from '../../constants';

export const InformationLayout = ({ currentPlayer, gameState }) => {
	return (
		<h1>
			{gameState === GAME_STATE.DRAW
				? 'Ничья'
				: gameState === GAME_STATE.WIN
					? `Победил: ${currentPlayer === PLAYER.CROSS ? 'крестик' : 'нолик'}`
					: `Ходит: ${currentPlayer === PLAYER.CROSS ? 'крестик' : 'нолик'}`}
		</h1>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY]),
	gameState: PropTypes.oneOf([GAME_STATE.DRAW, GAME_STATE.STEP, GAME_STATE.WIN]),
};
