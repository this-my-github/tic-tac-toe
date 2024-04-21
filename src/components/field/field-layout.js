import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, makeStep, resetGame }) => {
	return (
		<div>
			<div className={styles.field}>
				{field.map((value, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={() => makeStep(index)}
					>
						{value}
					</button>
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
