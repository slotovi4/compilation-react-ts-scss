import React from 'react';
import { Home } from 'src/components';
import { connect } from 'react-redux';
import { TRootState, TDispatch } from 'src/redux/store';

const HomeContainer = React.memo(({ textModelText, clearTestMoselState }: TProps) => (
	<Home
		text={textModelText}
		onHeaderClick={clearTestMoselState}
	/>
));

HomeContainer.displayName = 'HomeContainer';

const mapState = (state: TRootState) => ({
	textModelText: state.testModel.text,
});

const mapDispatch = (dispatch: TDispatch) => ({
	clearTestMoselState: dispatch.testModel.clearTestMoselState,
});

export default connect(mapState, mapDispatch)(HomeContainer);

type TProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
