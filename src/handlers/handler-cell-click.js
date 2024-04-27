import { GAME_STATE, PLAYER } from '../constants';
import { checkForWin } from '../utils/helpers';

export const handleCellClick = (
	{ currentPlayer, setCurrentPlayer, field, setField, gameState, setGameState },
	index,
) => {
	if (
		gameState === GAME_STATE.WIN ||
		gameState === GAME_STATE.DRAW ||
		field[index] !== PLAYER.NOBODY
	) {
		return;
	}

	const newField = [...field];

	newField[index] = currentPlayer;
	setField(newField);

	if (checkForWin(newField)) {
		setGameState(GAME_STATE.WIN);
	} else if (newField.includes(PLAYER.NOBODY)) {
		setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS);
	} else {
		setGameState(GAME_STATE.DRAW);
	}
};
