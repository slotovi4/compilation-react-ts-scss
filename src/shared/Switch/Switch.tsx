import styles from './Switch.module.scss';

import cn from 'classnames';

import type { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

export const Switch = ({
	name,
	id,
	className,
	...rest
}: IProps) => {
	const switchId = id || name;

	return (
		<div className={cn(styles.Switch, className)}>
			<input
				type="checkbox"
				id={switchId}
				{...rest}
			/>

			<label
				htmlFor={switchId}
				className={styles['Switch-Slider']}
			/>
		</div>
	);
};
