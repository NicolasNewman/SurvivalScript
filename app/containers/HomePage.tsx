import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';

import OutputActions from '../actions/output';
import ApiActions from '../actions/api';
import CodeActions from '../actions/code';

const mapStateToProps = (state, ownProps) => {
    console.log('State ', state);
    return {
        allText: state.output.allText,
        levels: state.api.levels,
        levelIndex: state.api.levelIndex,
        text: state.api.text,
        code: state.code.code
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            ...OutputActions,
            ...ApiActions,
            ...CodeActions
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
