// import store from "../store";
// import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from 'phaser';

// C:\JSProj\SurvivalScript\app\Game\Scenes\assets\tilesets\MarsTileSet.png

export default class ExampleScene extends Scene {
    player = null;
    cursors = null;
    preload() {
        this.load.image('player', 'Game/Scenes/assets/sprites/robotSprite.jpg');

        this.load.image('tiles', 'Game/Scenes/assets/tilesets/MarsTileSet.png');
        this.load.tilemapTiledJSON(
            'map',
            'Game/Scenes/assets/tilemaps/MarsMapFinal.json'
        );
        console.log('end preload');
    }
    create() {
        this.player = this.physics.add.sprite(640, 310, 'player');
        this.player.setScale(1 / 10, 1 / 10);
        this.player.setCollideWorldBounds(true); // don't go out of the map

        this.cursors = this.input.keyboard.createCursorKeys();

        const map = this.make.tilemap({ key: 'map' });

        const tileset = map.addTilesetImage('MarsTileSet', 'tiles');

        const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0);
        const worldLayer = map.createStaticLayer('World', tileset, 0, 0);
        const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0);

        const camera = this.cameras.main;

        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        console.log('end create');
    }

    update(time, delta) {
        if (this.cursors.left.isDown) {
            // if the left arrow key is down
            this.player.body.setVelocityX(-200); // move left
        } else if (this.cursors.right.isDown) {
            // if the right arrow key is down
            this.player.body.setVelocityX(200); // move right
        } else {
            this.player.body.setVelocityX(0);
        }
        if (
            (this.cursors.space.isDown || this.cursors.up.isDown) &&
            this.player.body.onFloor()
        ) {
            this.player.body.setVelocityY(-500); // jump up
        }
    }
}
