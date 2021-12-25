import styles from './Home.module.scss';

import { Logo, Switch } from 'src/shared';

interface IProps {
	theme: TTheme | null;
	title?: string;
	onHeaderClick?: () => void;
	onThemeSwitchChange?: () => void;
}

const Home = ({
	theme,
	title,
	onHeaderClick,
	onThemeSwitchChange
}: IProps) => {
	return (
		<section className={styles.Home}>
			{onThemeSwitchChange && (
				<Switch
					className={styles['Home-ThemeSwitch']}
					onChange={onThemeSwitchChange}
					name='themeSwitch'
					checked={theme === 'dark'}
				/>
			)}

			<header
				className={styles['Home-Header']}
				onClick={onHeaderClick}
			>
				<Logo className={styles['Home-Logo']} />

				<h1 className={styles['Home-Title']}>
					{title || 'Welcome to React'}
				</h1>
			</header>
		</section>
	);
};

export default Home;

type TTheme = 'dark' | 'light';
