import { models } from '../models';

import { createBrowserHistory } from 'history';
import { init } from '@rematch/core';
import { connectRouter } from 'connected-react-router';

import type { RematchRootState } from '@rematch/core';

export const store = init({
	models,
	plugins: [],
	redux: {
		initialState: {},
		reducers: {
			router: connectRouter(createBrowserHistory()),
		},
	},
});

export type TDispatch = typeof store.dispatch;
export type TRootState = RematchRootState<typeof models>;
