// import store from "../store";
// import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from 'phaser';
import Title from 'antd/lib/typography/Title';
import { deflate } from 'zlib';

import { store } from '../../index';
import { log } from '../../actions/output';

// C:\JSProj\SurvivalScript\app\Game\Scenes\assets\tilesets\MarsTileSet.png

export default class ExampleScene extends Scene {
    constructor() {
        super('MainScene');
    }
    //Global Variables
    controls = null;
    initialPlayerX = 1568;
    initialPlayerY = 1568;
    deltaTile = 64;

    //Preloading Tileset and Character Image
    preload() {
        this.load.image(
            'runButton',
            'Game/Scenes/assets/character/runButton.png'
        );

        this.load.image(
            'tiles',
            'Game/Scenes/assets/tilesets/MarsAboveBelowTileSet64.png'
        );
        this.load.tilemapTiledJSON(
            'map',
            'Game/Scenes/assets/tilemaps/MarsMap64.json'
        );
        console.log('end preload');
        this.load.image(
            'TestCharacter',
            'Game/Scenes/assets/character/TestCharacter.png'
        );
    }

    //Create Function for Game Code
    create() {
        //Create run button
        //const runButton = this.add.text(800, 300, 'runButton');
        //runButton.setInteractive();

        //Creating map and Tile Set
        const map = this.make.tilemap({ key: 'map' }); //Creating map
        const tileset = map.addTilesetImage('MarsAboveBelowTileSet64', 'tiles'); //Adding Tileset to Map
        const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0);
        const worldLayer = map.createDynamicLayer('World', tileset, 0, 0);
        const aboveLayer = map.createDynamicLayer(
            'Above Player',
            tileset,
            0,
            0
        );
        const camera = this.cameras.main;

        //Creating Player
        const player = this.add.image(
            this.initialPlayerX,
            this.initialPlayerY,
            'TestCharacter'
        );

        const runButton = this.add.image(
            player.x + 300,
            player.y - 300,
            'runButton'
        );
        runButton.setInteractive();

        runButton.on('pointerover', () => {
            console.log('pointerover');
        });
        //Camera Settings
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        camera.startFollow(player);

        //Button
        runButton.on('pointerdown', () => {
            console.log('runButton clicked');
        });
        //Movement

        //Up
        let wKey = this.input.keyboard.addKey('UP');

        wKey.on('down', event => {
            //Checking Tile Below
            const tileAbove = worldLayer.getTileAtWorldXY(
                player.x,
                player.y - (64 + 32),
                true
            );

            // Get the code
            console.log('GAME STORE ', store.getState().code.code);
            // Log to output
            store.dispatch(log(`Player at (${player.x}, ${player.y})`));

            //Placing Footprints
            const tileAt = worldLayer.getTileAtWorldXY(player.x, player.y);
            worldLayer.putTileAtWorldXY(5, player.x, player.y);

            //Determining if Path is Blocked
            let isBlocked;
            if (tileAbove === null) {
                isBlocked = false;
            } else if (tileAbove.index === 2 || tileAbove.index === 4) {
                isBlocked = true;
            }

            //Update Player Position and Angle
            if (isBlocked === true) {
                player.angle = 0;
            } else {
                let initialY = player.y;
                player.y = initialY - 64;
                runButton.setY(player.y - 300);
                player.angle = 0;
            }
        });

        //Right
        let dKey = this.input.keyboard.addKey('RIGHT');

        dKey.on('down', event => {
            //Checking Tile Below
            const tileRight = worldLayer.getTileAtWorldXY(
                player.x + 64,
                player.y,
                true
            );

            //Placing Footprints
            const tileAt = worldLayer.getTileAtWorldXY(player.x, player.y);
            worldLayer.putTileAtWorldXY(6, player.x, player.y);

            //Determining if Path is Blocked
            let isBlocked;
            if (tileRight === null) {
                isBlocked = false;
            } else if (tileRight.index === 2 || tileRight.index === 4) {
                isBlocked = true;
            }

            //Update Player Position and Angle
            if (isBlocked === true) {
                player.angle = 90;
            } else {
                let initialX = player.x;
                player.x = initialX + 64;
                runButton.setX(player.x + 300);
                player.angle = 90;
            }
        });

        //Left
        let aKey = this.input.keyboard.addKey('LEFT');

        aKey.on('down', event => {
            //Checking Tile Below
            const tileLeft = worldLayer.getTileAtWorldXY(
                player.x - (64 + 32),
                player.y,
                true
            );

            //Placing Footprints
            const tileAt = worldLayer.getTileAtWorldXY(player.x, player.y);
            worldLayer.putTileAtWorldXY(6, player.x, player.y);

            //Determining if Path is Blocked
            let isBlocked;
            if (tileLeft === null) {
                isBlocked = false;
            } else if (tileLeft.index === 2 || tileLeft.index === 4) {
                isBlocked = true;
            }

            //Update Player Position and Angle
            if (isBlocked === true) {
                player.angle = -90;
            } else {
                let initialX = player.x;
                player.x = initialX - 64;
                runButton.setX(player.x + 300);
                player.angle = -90;
            }
        });

        //Down
        let sKey = this.input.keyboard.addKey('DOWN');

        sKey.on('down', event => {
            //Checking Tile Below
            const tileBelow = worldLayer.getTileAtWorldXY(
                player.x,
                player.y + 64,
                true
            );

            //Placing Footprints
            const tileAt = worldLayer.getTileAtWorldXY(player.x, player.y);
            worldLayer.putTileAtWorldXY(5, player.x, player.y);

            //Determining if Path is Blocked
            let isBlocked;
            if (tileBelow === null) {
                isBlocked = false;
            } else if (tileBelow.index === 2 || tileBelow.index === 4) {
                isBlocked = true;
            }

            //Update Player Position and Angle
            if (isBlocked === true) {
                player.angle = 180;
            } else {
                let initialY = player.y;
                player.y = initialY + 64;
                runButton.setY(player.y - 300);
                player.angle = 180;
            }
        });
    }
}
