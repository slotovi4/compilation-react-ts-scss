import logo from './logo.icon.svg';

import type { ImgHTMLAttributes } from 'react';

export const Logo = (props: TProps) => {
	return (
		<img
			alt="logo"
			src={logo}
			height={80}
			width={80}
			{...props}
		/>
	);
};

type TProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;
