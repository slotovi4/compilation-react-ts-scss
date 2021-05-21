import { Models } from '@rematch/core';
import { testModel } from './testModel';

export interface IRootModel extends Models<IRootModel> {
	testModel: typeof testModel;
}

export const models: IRootModel = {
	testModel
};