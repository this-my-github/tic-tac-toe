import PropTypes from 'prop-types';
import { FieldLayout } from './field-layout';
import { PLAYER } from '../../constants';

export const FieldContainer = ({ field, handleCellClick, handleRestart }) => {
	return (
		<FieldLayout
			field={field}
			handleCellClick={handleCellClick}
			handleRestart={handleRestart}
		/>
	);
};

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY])),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
};
