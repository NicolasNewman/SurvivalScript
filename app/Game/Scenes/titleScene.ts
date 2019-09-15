// import store from "../store";
// import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from 'phaser';

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
    }

    update(time, delta) {
        const keyObj = this.input.keyboard.addKey('Y');
        if (keyObj.isDown) {
            this.scene.start('BlackScene');
        }
    }
}
