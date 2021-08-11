import { IRootModel } from './index';

import { createModel } from '@rematch/core';

const initialState: IState = {
	text: 'Test value'
};

export const testModel = createModel<IRootModel>()({
	state: initialState,
	reducers: {
		clearState() {
			return initialState;
		},
	},
	effects: dispatch => ({
		async clearTestMoselState() {
			dispatch.testModel.clearState();
		},
	}),
});

interface IState {
	text: string;
}
