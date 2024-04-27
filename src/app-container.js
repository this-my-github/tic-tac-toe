import { useState } from 'react';
import { handleCellClick, handleRestart } from './handlers';
import { createEmptyField } from './utils/helpers';
import { AppLayout } from './app-layout';
import { PLAYER, GAME_STATE } from './constants';

export const AppContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(createEmptyField());
	const [gameState, setGameState] = useState(GAME_STATE.STEP);

	const state = {
		currentPlayer,
		setCurrentPlayer,
		field,
		setField,
		gameState,
		setGameState,
	};

	return (
		<AppLayout
			currentPlayer={currentPlayer}
			gameState={gameState}
			field={field}
			handleCellClick={(cellIndex) => handleCellClick(state, cellIndex)}
			handleRestart={() => handleRestart(state)}
		/>
	);
};
