import { Home } from 'src/components';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import type { TRootState, TDispatch } from 'src/redux/store';

interface IProps extends TReduxProps {
	id?: string;
	redirectToHome: () => void;
}

const HomeContainer = ({
	title,
	redirectToHome,
	updateThemeAsync,
	theme,
	id
}: IProps) => {
	useEffect(() => {
		if (theme) {
			document.body.setAttribute('data-theme', theme);
		}
	}, [theme]);

	const onThemeSwitchChange = () => {
		updateThemeAsync(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Home
			theme={theme}
			title={id || title}
			onLogoClick={redirectToHome}
			onThemeSwitchChange={onThemeSwitchChange}
		/>
	);
};

const mapState = (state: TRootState) => ({
	title: state.test.text,
	theme: state.test.theme
});

const mapDispatch = (dispatch: TDispatch) => ({
	updateThemeAsync: dispatch.test.updateThemeAsync
});

export default connect(mapState, mapDispatch)(HomeContainer);

type TReduxProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
