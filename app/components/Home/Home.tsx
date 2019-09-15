import * as React from 'react';
import { Component } from 'react';
// import { Link } from 'react-router-dom';
// const routes = require('../constants/routes.json');

import Game from '../Game/Game';
import UserTabs from '../Tabs/UserTabs';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {
    allText: Array<string>;
    levels: Array<string>;
    levelIndex: number;
    text: string;

    log: (text: string) => void;
    debug: (indexes: Array<number>) => void;
    addLevel: () => void;
}

export default class Home extends Component<IProps> {
    props: IProps;

    constructor(props, history) {
        super(props);
        this.props.debug([0]);
        this.props.log('Hello world!');
        this.props.log('Hello taco!');
        this.props.log('Hello taco!');
        this.props.log('Hello taco!');
        this.props.log('Hello taco!');
        this.props.log('Hello taco!');
        this.props.log('Hello taco!');
        this.props.log('Hello taco!');
        this.props.log('Hello taco!');
        this.props.log('Hello world!');
        this.props.log('Hello world!');
        this.props.log('Hello world!');
        this.props.log('Hello world!');
    }

    render() {
        console.log('Game ', this.props);
        return (
            <div className="home grid two-col" data-tid="container">
                <div className="">
                    <Game />
                </div>
                <div className="">
                    <UserTabs
                        allText={this.props.allText}
                        text={this.props.text}
                    />
                </div>

                {/* <Link to={routes.COUNTER}>to Counter</Link> */}
            </div>
        );
    }
}
