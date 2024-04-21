import styles from './field.module.css';
import PropTypes from 'prop-types';

export const Field = ({
	currentPlayer,
	isGameEnded,
	field,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
}) => {
	const makeStep = (event, index) => {
		if (!field[index] && !isGameEnded) {
			field[index] = currentPlayer;
			setField(field);

			if (currentPlayer === 'X') {
				event.target.classList.add(styles.cross);
			} else if (currentPlayer === '0') {
				event.target.classList.add(styles.zero);
			}

			if (checkForWin()) {
				setIsGameEnded(true);
			} else {
				if (!field.includes('')) {
					setIsDraw(true);
				} else {
					currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X');
				}
			}
		}

		// checkForWin() ? setIsGameEnded(true) : !field.includes('') ?
		// setIsDraw(true) : currentPlayer === 'X' ? setCurrentPlayer('0')
		// : setCurrentPlayer('X')
	};

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const checkForWin = () => {
		return WIN_PATTERNS.some((pattern) => {
			const values = pattern.map((i) => field[i]);
			return values.every((value) => value === field[pattern[0]] && value !== '');
		});
	};

	const resetGame = (event) => {
		let field = event.target.parentNode.firstChild;
		let cells = field.childNodes;

		cells.forEach((button) => {
			if (
				button.classList.contains(styles.cross) ||
				button.classList.contains(styles.zero)
			) {
				button.classList.remove(styles.cross, styles.zero);
			}
		});

		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return <FieldLayout field={field} makeStep={makeStep} resetGame={resetGame} />;
};

Field.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.string,
	field: PropTypes.array,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
};

export const FieldLayout = ({ field, makeStep, resetGame }) => {
	return (
		<div>
			<div className={styles.field}>
				{field.map((_, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={(event) => makeStep(event, index)}
					></button>
				))}
			</div>
			<button className={styles.btn} onClick={resetGame}>
				Начать заново
			</button>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	makeStep: PropTypes.func,
	resetGame: PropTypes.func,
};
