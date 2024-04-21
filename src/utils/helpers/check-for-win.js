import { WIN_PATTERNS } from '../../constants/win-patterns';

export const checkForWin = (field) => {
	return WIN_PATTERNS.some((pattern) => {
		const values = pattern.map((i) => field[i]);
		return values.every((value) => value === field[pattern[0]] && value !== '');
	});
};
