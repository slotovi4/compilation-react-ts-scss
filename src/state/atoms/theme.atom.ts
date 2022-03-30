import { themeStorage } from '../localStorage';

import { atom } from 'recoil';

import type { AtomEffect } from 'recoil';

const onChangeTheme: AtomEffect<TTheme> = ({ onSet }) => {
	onSet(async newTheme => {
		if (newTheme) {
			themeStorage.setItem(newTheme);
		}
	});
};

export const themeState = atom<TTheme>({
	key: 'themeState',
	default: themeStorage.getItem() as TTheme | null,
	effects: [
		onChangeTheme,
	]
});

type TTheme = 'dark' | 'light' | null;
