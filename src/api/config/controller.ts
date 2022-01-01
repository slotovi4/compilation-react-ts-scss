import axiosBase from './axiosBase';
import { formatRequestConfig } from './formatRequestConfig';

import type { IRequestConfig } from './formatRequestConfig';

interface IProps {
	requestUrl: string | undefined;
}

export abstract class Controller {
	private readonly _requestUrl: IProps['requestUrl'];

	protected constructor({ requestUrl }: IProps) {
		this._requestUrl = requestUrl;
	}

	protected post<T>(path?: string, data?: unknown, config?: IRequestConfig) {
		const request = () => {
			return axiosBase.post<T>(
				this.concatPath(path),
				data,
				formatRequestConfig(config)
			);
		};

		return request();
	}

	protected get<T>(path?: string, config?: IRequestConfig) {
		const request = () => {
			return axiosBase.get<T>(
				this.concatPath(path),
				formatRequestConfig(config)
			);
		};

		return request();
	}

	protected delete<T>(path?: string, config?: IRequestConfig) {
		const request = () => {
			return axiosBase.delete<T>(
				this.concatPath(path),
				formatRequestConfig(config)
			);
		};

		return request();
	}

	protected put<T>(path?: string, data?: unknown, config?: IRequestConfig) {
		const request = () => {
			return axiosBase.put<T>(
				this.concatPath(path),
				data,
				formatRequestConfig(config)
			);
		};

		return request();
	}

	private concatPath(path?: string) {
		return `${this._requestUrl || ''}${path || ''}`;
	}
}
