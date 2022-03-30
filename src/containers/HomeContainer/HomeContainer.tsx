import { Home } from 'src/components';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from 'src/state';
import { TestAPI } from 'src/api';

interface IProps {
	id?: string;
	redirectToHome: () => void;
}

export const HomeContainer = ({
	redirectToHome,
	id
}: IProps) => {
	const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

	useEffect(() => {
		if (currentTheme) {
			document.body.setAttribute('data-theme', currentTheme);
		}
	}, [currentTheme]);

	const onThemeSwitchChange = () => {
		setCurrentTheme(oldTheme => oldTheme === 'dark' ? 'light' : 'dark');
	};

	const sendTestRequest = async () => {
		await TestAPI.testRequest();
	};

	return (
		<Home
			theme={currentTheme}
			title={id}
			onLogoClick={redirectToHome}
			onThemeSwitchChange={onThemeSwitchChange}
			sendTestRequest={sendTestRequest}
		/>
	);
};
