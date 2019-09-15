import { Scene } from 'phaser';

export default class BlackScene extends Scene {
    constructor() {
        super('BlackScene');
    }
    preload() {}
    create() {
        this.add.text(
            20,
            20,
            'ERROR: Memory corrupted. Cannot load satelite visual.',
            { fill: 'red' }
        );
        this.add.text(
            20,
            40,
            'See Code Terminal and Command List for information',
            { fill: 'red' }
        );
    }

    update(time, delta) {
        const keyObj = this.input.keyboard.addKey('Y');
        if (keyObj.isDown) {
            this.scene.start('MainScene');
        }
    }
}
