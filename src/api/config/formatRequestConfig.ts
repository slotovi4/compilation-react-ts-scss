/* eslint-disable @typescript-eslint/naming-convention */
import type { AxiosRequestConfig } from 'axios';

export const formatRequestConfig = (config: IRequestConfig | undefined) => {
	if (!config) {
		return undefined;
	}

	const { access_token, ...rest } = config;

	return {
		...rest,
		headers: {
			Authorization: `Bearer ${access_token}`,
			...rest.headers
		}
	};
};

export interface IRequestConfig extends AxiosRequestConfig {
	access_token: string | null;
}
