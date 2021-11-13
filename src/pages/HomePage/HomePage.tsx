import { HomeContainer } from 'src/containers';
import { useParams } from 'react-router';

export const HomePage = () => {
	const params = useParams();

	return (
		<HomeContainer id={params.id} />
	);
};
