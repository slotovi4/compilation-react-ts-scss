import { testModel } from './testModel';

import type { Models } from '@rematch/core';

export interface IRootModel extends Models<IRootModel> {
	testModel: typeof testModel;
}

export const models: IRootModel = {
	testModel
};
