import * as React from 'react';
import { Component } from 'react';

import Phaser from 'phaser';
import MainScene from '../../Game/Scenes/testScene';
import { GAME_WIDTH, HEIGHT } from '../../config';

interface IProps {}

export default class Game extends Component<IProps> {
    props: IProps;

    constructor(props, history) {
        super(props);
    }

    componentDidMount() {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: GAME_WIDTH,
            height: HEIGHT,
            parent: 'game',
            scene: [MainScene]
        };
        new Phaser.Game(config);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <div id="game"></div>;
    }
}
