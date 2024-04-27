import { InformationContainer } from './components/information/information-container';
import { FieldContainer } from './components/field/field-container';
import styles from './app.module.css';
import PropTypes from 'prop-types';
import { GAME_STATE, PLAYER } from './constants';

export const AppLayout = ({
	currentPlayer,
	gameState,
	field,
	handleCellClick,
	handleRestart,
}) => {
	return (
		<div className={styles.container}>
			<InformationContainer currentPlayer={currentPlayer} gameState={gameState} />
			<FieldContainer
				field={field}
				handleCellClick={handleCellClick}
				handleRestart={handleRestart}
			/>
		</div>
	);
};

AppLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY])),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY]),
	gameState: PropTypes.oneOf([GAME_STATE.DRAW, GAME_STATE.STEP, GAME_STATE.WIN]),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
};
