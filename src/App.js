import styles from './app.module.css';
import { FieldContainer } from './components/field/field-container';
import { useState } from 'react';
import { InformationContainer } from './components/information/information-container';
import { checkForWin } from './utils/helpers/check-for-win';

export const AppContainer = () => {
	const startField = ['', '', '', '', '', '', '', '', ''];
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(startField);

	const makeStep = (index) => {
		if (!field[index] && !isGameEnded) {
			field[index] = currentPlayer;
			setField(field);

			if (checkForWin(field)) {
				setIsGameEnded(true);
			} else {
				if (!field.includes('')) {
					setIsDraw(true);
				} else {
					currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X');
				}
			}
		}
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(startField);
	};

	return (
		<AppLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			setCurrentPlayer={setCurrentPlayer}
			setIsGameEnded={setIsGameEnded}
			setIsDraw={setIsDraw}
			setField={setField}
			makeStep={makeStep}
			resetGame={resetGame}
		/>
	);
};

export const AppLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
	makeStep,
	resetGame,
}) => {
	return (
		<div className={styles.container}>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				field={field}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setField={setField}
				makeStep={makeStep}
				resetGame={resetGame}
			/>
		</div>
	);
};
