import { HomeContainer } from 'src/containers';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const params = useParams();
	const navigate = useNavigate();

	const redirectToHome = () => {
		navigate('/');
	};

	return (
		<HomeContainer
			redirectToHome={redirectToHome}
			id={params.id}
		/>
	);
};
