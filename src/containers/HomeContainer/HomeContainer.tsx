import { Home } from 'src/components';
import { connect } from 'react-redux';

import type { TRootState, TDispatch } from 'src/redux/store';

interface IProps extends TReduxProps {
	id?: string;
}

const HomeContainer = ({ title, onHeaderClick, id }: IProps) => (
	<Home
		title={id || title}
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

type TReduxProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
