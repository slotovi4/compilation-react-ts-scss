import { test } from './test/test.model';

import type { Models } from '@rematch/core';

export interface IRootModel extends Models<IRootModel> {
	test: typeof test;
}

export const models: IRootModel = {
	test
};
