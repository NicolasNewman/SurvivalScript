import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';

import GameActions from '../actions/game';

const mapStateToProps = (state, ownProps) => {
    return {
        game: state.game.game,
        initalize: state.game.initialize
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            ...GameActions
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
