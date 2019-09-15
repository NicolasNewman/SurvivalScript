// import store from "../store";
// import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from 'phaser';

export default class TitleScene extends Scene {
    preload() {
        this.load.image(
            'Background',
            'Game/Scenes/assets/intialBackground/HelloWorldBackGround.png'
        );
        console.log('end preload');
    }
    create() {
        this.add.image(415, 330, 'Background').setDisplaySize(830, 720);
        //this.Background.setOrigin(0, 0);
        //const camera = this.cameras.main;

        //camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        console.log('end create');
    }

    update(time, delta) {}
}
