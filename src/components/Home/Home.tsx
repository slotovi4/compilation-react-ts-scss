import styles from './Home.module.scss';

import { Logo, Switch } from 'src/shared';

interface IProps {
	theme: TTheme | null;
	title?: string;
	onLogoClick: () => void;
	onThemeSwitchChange: () => void;
	sendTestRequest: () => void;
}

const Home = ({
	theme,
	title,
	onLogoClick,
	onThemeSwitchChange,
	sendTestRequest
}: IProps) => {
	return (
		<section className={styles.Home}>
			<Switch
				className={styles['Home-ThemeSwitch']}
				onChange={onThemeSwitchChange}
				checked={theme === 'dark'}
				name='themeSwitch'
			/>

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

			<button
				className={styles['Home-RequestButton']}
				onClick={sendTestRequest}
			>
				Send test request
			</button>
		</section>
	);
};

export default Home;

type TTheme = 'dark' | 'light';
