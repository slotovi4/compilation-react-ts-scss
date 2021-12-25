import { themeStorage } from '../localStorage';

import { createModel } from '@rematch/core';

import type { IRootModel } from './index';

const savedTheme = themeStorage.getItem() as IState['theme'] | null;

const initialState: IState = {
	text: 'Test value',
	theme: savedTheme
};

export const test = createModel<IRootModel>()({
	state: initialState,
	reducers: {
		clearState() {
			return initialState;
		},
		updateTheme(state, theme: IState['theme']) {
			return {
				...state,
				theme
			};
		}
	},
	effects: dispatch => ({
		async updateThemeAsync(theme: IState['theme']) {
			dispatch.test.updateTheme(theme);

			if (theme) {
				themeStorage.setItem(theme);
			}
		}
	}),
});

interface IState {
	text: string;
	theme: 'dark' | 'light' | null;
}
