import logo from './logo.icon.svg';

import type { ImgHTMLAttributes } from 'react';

export const Logo = (props: TProps) => {
	return (
		<img
			src={logo}
			alt="logo"
			{...props}
		/>
	);
};

type TProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;
