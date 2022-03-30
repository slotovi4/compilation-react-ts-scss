import { LocalStorage } from './localStorage';

class ThemeStorage extends LocalStorage {
	public constructor() {
		super({
			storageKey: 'theme'
		});
	}
}

export const themeStorage = new ThemeStorage();
