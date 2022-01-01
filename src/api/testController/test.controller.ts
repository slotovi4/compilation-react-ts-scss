import { Controller } from '../config';

class TestController extends Controller {
	public constructor() {
		super({
			requestUrl: undefined
		});
	}

	public async testRequest() {
		return this.post<null>('/testRequest');
	}
}

export const TestAPI = new TestController();
