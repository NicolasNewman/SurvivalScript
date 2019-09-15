import { Scene } from 'phaser';

import {
    clearCodeWrapper,
    getCodeWrapper,
    logOutputWrapper,
    clearOutputWrapper
} from './ReduxBridge';

export default class BlackScene extends Scene {
    constructor() {
        super('BlackScene');
    }
    preload() {
        this.load.image(
            'runButton',
            'Game/Scenes/assets/character/runButton.png'
        );
    }
    userInput = '';
    create() {
        const runButton = this.add.image(710, 50, 'runButton');
        runButton.setInteractive();
        runButton.on('pointerdown', () => {
            this.userInput = getCodeWrapper();
        });
        clearCodeWrapper();
        clearOutputWrapper();
        logOutputWrapper("Type 'init' and click 'run' to initialize");
        //const userInput = getCodeWrapper();

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
        if (this.userInput === 'init') {
            logOutputWrapper('Initialized');
            this.userInput = '';
            clearCodeWrapper();
            logOutputWrapper(
                'Open Command List tab and read documentation to reorient satellite image'
            );
        }
    }
}
