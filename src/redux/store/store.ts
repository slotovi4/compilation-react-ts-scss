import { models } from '../models';

import { init } from '@rematch/core';

import type { RematchRootState } from '@rematch/core';

export const store = init({
	models,
	plugins: [],
	redux: {
		initialState: {},
	},
});

export type TDispatch = typeof store.dispatch;

export type TRootState = RematchRootState<typeof models>;
