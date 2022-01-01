import { Controller } from '../config';

class TestController extends Controller {
	public constructor() {
		super({
			requestUrl: undefined
		});
	}

	public async testRequest() {
		return this.post<null>('/login');
	}
}

export const TestAPI = new TestController();
