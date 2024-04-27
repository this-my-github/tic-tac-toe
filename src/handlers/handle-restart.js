import { GAME_STATE, PLAYER } from '../constants';
import { createEmptyField } from '../utils/helpers';

export const handleRestart = ({ setGameState, setCurrentPlayer, setField }) => {
	setGameState(GAME_STATE.STEP);
	setCurrentPlayer(PLAYER.CROSS);
	setField(createEmptyField());
};
