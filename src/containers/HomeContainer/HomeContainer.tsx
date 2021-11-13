import { Home } from 'src/components';
import { connect } from 'react-redux';

import type { TRootState, TDispatch } from 'src/redux/store';

interface IProps extends TReduxProps {
	redirectToHome: () => void;
	id?: string;
}

const HomeContainer = ({
	title,
	redirectToHome,
	clearTestMoselState,
	id
}: IProps) => {
	const onHeaderClick = () => {
		clearTestMoselState();
		redirectToHome();
	};

	return (
		<Home
			title={id || title}
			onHeaderClick={onHeaderClick}
		/>
	);
};

const mapState = (state: TRootState) => ({
	title: state.testModel.text,
});

const mapDispatch = (dispatch: TDispatch) => ({
	clearTestMoselState: dispatch.testModel.clearTestMoselState,
});

export default connect(mapState, mapDispatch)(HomeContainer);

type TReduxProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
