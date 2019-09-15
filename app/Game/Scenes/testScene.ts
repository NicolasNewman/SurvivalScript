// import store from "../store";
// import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from 'phaser';
import Title from 'antd/lib/typography/Title';
import { deflate } from 'zlib';

// C:\JSProj\SurvivalScript\app\Game\Scenes\assets\tilesets\MarsTileSet.png

export default class ExampleScene extends Scene {
    //Global Variables
    controls = null;
    initialPlayerX = 1568;
    initialPlayerY = 1568;
    deltaTile = 64;
    playerTileX = 25;
    playerTileY = 25;

    //Preloading Tileset and Character Image
    preload() {
        this.load.image(
            'tiles',
            'Game/Scenes/assets/tilesets/MarsTileSet64.png'
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
        //Creating map and Tile Set
        const map = this.make.tilemap({ key: 'map' }); //Creating map
        const tileset = map.addTilesetImage('MarsTileSet64', 'tiles'); //Adding Tileset to Map
        const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0);
        const worldLayer = map.createStaticLayer('World', tileset, 0, 0);
        const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0);
        const camera = this.cameras.main;

        //Creating Player
        const player = this.add.image(
            this.initialPlayerX,
            this.initialPlayerY,
            'TestCharacter'
        );

        //Camera Settings
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        camera.startFollow(player);

        //Movement

        //Up
        let wKey = this.input.keyboard.addKey('W');

        wKey.on('down', event => {
            //Checking Tile Below
            const tileAbove = worldLayer.getTileAtWorldXY(
                player.x,
                player.y - (64 + 32),
                true
            );

            //Determining if Path is Blocked
            let isBlocked;
            if (tileAbove === null) {
                isBlocked = false;
            } else if (tileAbove.index === 2 || tileAbove.index === 4) {
                isBlocked = true;
            }

            //Update Player Position
            if (isBlocked === true) {
            } else {
                let initialY = player.y;
                player.y = initialY - 64;
            }
        });

        //Down
        let dKey = this.input.keyboard.addKey('D');

        dKey.on('down', event => {
            //Checking Tile Below
            const tileRight = worldLayer.getTileAtWorldXY(
                player.x + 64,
                player.y,
                true
            );

            //Determining if Path is Blocked
            let isBlocked;
            if (tileRight === null) {
                isBlocked = false;
            } else if (tileRight.index === 2 || tileRight.index === 4) {
                isBlocked = true;
            }

            //Update Player Position
            if (isBlocked === true) {
            } else {
                let initialX = player.x;
                player.x = initialX + 64;
            }
        });

        //Left
        let aKey = this.input.keyboard.addKey('A');

        aKey.on('down', event => {
            //Checking Tile Below
            const tileLeft = worldLayer.getTileAtWorldXY(
                player.x - (64 + 32),
                player.y,
                true
            );

            //Determining if Path is Blocked
            let isBlocked;
            if (tileLeft === null) {
                isBlocked = false;
            } else if (tileLeft.index === 2 || tileLeft.index === 4) {
                isBlocked = true;
            }

            //Update Player Position
            if (isBlocked === true) {
            } else {
                let initialX = player.x;
                player.x = initialX - 64;
            }
        });

        //Right
        let sKey = this.input.keyboard.addKey('S');

        sKey.on('down', event => {
            //Checking Tile Below
            const tileBelow = worldLayer.getTileAtWorldXY(
                player.x,
                player.y + 64,
                true
            );

            //Determining if Path is Blocked
            let isBlocked;
            if (tileBelow === null) {
                isBlocked = false;
            } else if (tileBelow.index === 2 || tileBelow.index === 4) {
                isBlocked = true;
            }

            //Update Player Position
            if (isBlocked === true) {
            } else {
                let initialY = player.y;
                player.y = initialY + 64;
            }
        });
    }

    update(time, delta) {}
}
