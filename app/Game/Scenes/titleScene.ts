// import store from "../store";
// import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from 'phaser';
import {
    clearCodeWrapper,
    getCodeWrapper,
    logOutputWrapper,
    clearOutputWrapper
} from './ReduxBridge';

export default class TitleScene extends Scene {
    constructor() {
        super('TitleScene');
    }
    preload() {
        this.load.image(
            'Background',
            'Game/Scenes/assets/intialBackground/HelloWorldBackGround.png'
        );
        console.log('end preload');
    }
    create() {
        this.add.image(415, 330, 'Background').setDisplaySize(830, 720);
        console.log('end create');
        logOutputWrapper('Survival Script Version 0.1');
        logOutputWrapper('Game Currently Under Development');
        logOutputWrapper(
            "Explore a desolate landscape as Qwerty and learn programming and how to read an API while rebuilding Qwerty's code"
        );
    }

    update(time, delta) {
        const keyObj = this.input.keyboard.addKey('Y');
        if (keyObj.isDown) {
            this.scene.start('BlackScene');
        }
    }
}
