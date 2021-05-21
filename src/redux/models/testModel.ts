import { createModel } from '@rematch/core';
import { IRootModel } from './index';

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