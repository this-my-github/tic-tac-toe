import PropTypes from 'prop-types';
import { InformationLayout } from './information-layout';
import { GAME_STATE, PLAYER } from '../../constants';

export const InformationContainer = ({ currentPlayer, gameState }) => {
	return <InformationLayout currentPlayer={currentPlayer} gameState={gameState} />;
};

InformationContainer.propTypes = {
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY]),
	gameState: PropTypes.oneOf([GAME_STATE.DRAW, GAME_STATE.STEP, GAME_STATE.WIN]),
};
