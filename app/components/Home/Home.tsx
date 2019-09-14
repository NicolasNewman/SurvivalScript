import * as React from 'react';
import { Component } from 'react';
// import { Link } from 'react-router-dom';
// const routes = require('../constants/routes.json');

import Game from '../Game/Game';
import Tabs from '../Tabs/Tabs';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {
    game: any;
    initialize: any;
}

export default class Home extends Component<IProps> {
    props: IProps;

    constructor(props, history) {
        super(props);
    }

    render() {
        console.log('Game ', this.props);
        return (
            <div className="home grid two-col" data-tid="container">
                <div className="">
                    <Game
                        game={this.props.game}
                        initialize={this.props.initialize}
                    />
                </div>
                <div className="">
                    <Tabs />
                </div>

                {/* <Link to={routes.COUNTER}>to Counter</Link> */}
            </div>
        );
    }
}
