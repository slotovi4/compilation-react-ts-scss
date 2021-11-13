import { Home } from 'src/components';
import { connect } from 'react-redux';

import type { TRootState, TDispatch } from 'src/redux/store';

const HomeContainer = ({ title, onHeaderClick }: TProps) => (
	<Home
		title={title}
		onHeaderClick={onHeaderClick}
	/>
);

const mapState = (state: TRootState) => ({
	title: state.testModel.text,
});

const mapDispatch = (dispatch: TDispatch) => ({
	onHeaderClick: dispatch.testModel.clearTestMoselState,
});

export default connect(mapState, mapDispatch)(HomeContainer);

type TProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
