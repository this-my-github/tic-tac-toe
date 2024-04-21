import styles from './app.module.css';
import { Field } from './components/field/field';
import { useState } from 'react';
import { Information } from './components/information/information';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

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
}) => {
	return (
		<div className={styles.container}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				field={field}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setField={setField}
			/>
		</div>
	);
};
