import * as React from 'react';
import { Component } from 'react';

import Phaser from 'phaser';
import TitleScene from '../../Game/Scenes/titleScene';
import MainScene from '../../Game/Scenes/testScene';
import { GAME_WIDTH, HEIGHT } from '../../config';

interface IProps {
    game: any;
    initialize: any;
}

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
            render: {
                pixelArt: true
            },
            scene: [TitleScene, MainScene]
        };
        const game = new Phaser.Game(config);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.log(this.props);
        return <div id="game"></div>;
    }
}
