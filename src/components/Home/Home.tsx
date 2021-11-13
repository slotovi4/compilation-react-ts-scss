import logo from './logo.icon.svg';

import { cn } from '@bem-react/classname';
import './Home.scss';

const Home = ({ title, onHeaderClick }: IProps) => {
	const home = cn('Home');

	return (
		<section className={home()}>
			<header className={home('Header')} onClick={onHeaderClick}>
				<img
					src={logo}
					className={home('Logo')}
					alt="logo"
				/>

				<h1 className={home('Title')}>
					{title || 'Welcome to React'}
				</h1>
			</header>

			<p className={home('Intro')}>
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
