import styles from './Home.module.scss';

import { Logo } from 'src/shared';

const Home = ({ title, onHeaderClick }: IProps) => {
	return (
		<section className={styles.Home}>
			<header
				className={styles['Home-Header']}
				onClick={onHeaderClick}
			>
				<Logo className={styles['Home-Logo']} />

				<h1 className={styles['Home-Title']}>
					{title || 'Welcome to React'}
				</h1>
			</header>

			<p className={styles['Home-Title']}>
				Intro
			</p>
		</section>
	);
};

export default Home;

interface IProps {
	title?: string;
	onHeaderClick?: () => void;
}
