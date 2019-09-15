import { Scene } from 'phaser';

export default class BlackScene extends Scene {
    constructor() {
        super('BlackScene');
    }
    preload() {}
    create() {
        //this.text.add(0, 0, '');
    }

    update(time, delta) {
        const keyObj = this.input.keyboard.addKey('Y');
        if (keyObj.isDown) {
            this.scene.start('MainScene');
        }
    }
}
