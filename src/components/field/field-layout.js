import { PLAYER } from '../../constants';
import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleCellClick, handleRestart }) => {
	return (
		<div>
			<div className={styles.field}>
				{field.map((value, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={() => handleCellClick(index)}
					>
						{value}
					</button>
				))}
			</div>
			<button className={styles.btn} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY])),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
};
