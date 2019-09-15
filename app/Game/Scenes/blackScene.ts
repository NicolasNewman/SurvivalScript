import { Scene } from 'phaser';

export default class blackScene extends Scene {
    constructor() {
        super('blackScene');
    }
    preload() {}
    create() {}

    update(time, delta) {
        const keyObj = this.input.keyboard.addKey('Y');
        if (keyObj.isDown) {
            this.scene.start('MainScene');
        }
    }
}
