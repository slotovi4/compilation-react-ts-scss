import styles from './Home.module.scss';

import { Logo, Switch } from 'src/shared';

interface IProps {
	theme: TTheme | null;
	title?: string;
	onLogoClick?: () => void;
	onThemeSwitchChange?: () => void;
}

const Home = ({
	theme,
	title,
	onLogoClick,
	onThemeSwitchChange
}: IProps) => {
	return (
		<section className={styles.Home}>
			{onThemeSwitchChange && (
				<Switch
					className={styles['Home-ThemeSwitch']}
					onChange={onThemeSwitchChange}
					checked={theme === 'dark'}
					name='themeSwitch'
				/>
			)}

			<header className={styles['Home-Header']}>
				<Logo
					className={styles['Home-Logo']}
					onClick={onLogoClick}
					title='redirect to home'
				/>

				<h1 className={styles['Home-Title']}>
					{title || 'Welcome to React'}
				</h1>
			</header>
		</section>
	);
};

export default Home;

type TTheme = 'dark' | 'light';
