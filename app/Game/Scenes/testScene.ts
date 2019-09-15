// import store from "../store";
// import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from 'phaser';

// C:\JSProj\SurvivalScript\app\Game\Scenes\assets\tilesets\MarsTileSet.png

export default class ExampleScene extends Scene {
    constructor() {
        super('MainScene');
    }
    preload() {
        this.load.image('tiles', 'Game/Scenes/assets/tilesets/MarsTileSet.png');
        this.load.tilemapTiledJSON(
            'map',
            'Game/Scenes/assets/tilemaps/MarsMapFinal.json'
        );
        console.log('end preload');
    }
    create() {
        const map = this.make.tilemap({ key: 'map' });

        const tileset = map.addTilesetImage('MarsTileSet', 'tiles');

        const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0);
        const worldLayer = map.createStaticLayer('World', tileset, 0, 0);
        const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0);

        const camera = this.cameras.main;

        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        console.log('end create');
    }

    update(time, delta) {}
}
