import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';

import OutputActions from '../actions/output';
import ApiActions from '../actions/api';

const mapStateToProps = (state, ownProps) => {
    console.log('State ', state);
    return {
        allText: state.output.allText,
        levels: state.api.levels,
        levelIndex: state.api.levelIndex,
        text: state.api.text
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            ...OutputActions,
            ...ApiActions
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
