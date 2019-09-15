// import store from "../store";
// import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from 'phaser';
import Title from 'antd/lib/typography/Title';
import { deflate } from 'zlib';

// C:\JSProj\SurvivalScript\app\Game\Scenes\assets\tilesets\MarsTileSet.png

export default class ExampleScene extends Scene {
    controls = null;
    initialPlayerX = 1568;
    initialPlayerY = 1568;
    deltaTile = 64;
    playerTileX = 25;
    playerTileY = 25;

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
    create() {
        const map = this.make.tilemap({ key: 'map' });

        const tileset = map.addTilesetImage('MarsTileSet64', 'tiles');

        const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0);
        const worldLayer = map.createStaticLayer('World', tileset, 0, 0);
        const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0);
        const camera = this.cameras.main;

        worldLayer.setCollisionByProperty({ collides: true });

        const player = this.add.image(
            this.initialPlayerX,
            this.initialPlayerY,
            'TestCharacter'
        );

        const cursors = this.input.keyboard.createCursorKeys();
        /*this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
            camera: camera,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        }); */

        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        camera.startFollow(player);
        console.log('end create');

        //Movement
        let wKey = this.input.keyboard.addKey('W');

        wKey.on('down', event => {
            console.log('W pressed');
            console.log(worldLayer);
            const tileAbove = worldLayer.getTileAtWorldXY(
                player.x,
                player.y - (64 + 32),
                true
            );
            console.log(tileAbove);
            let isBlocked;
            if (tileAbove === null) {
                isBlocked = false;
                console.log('tileAbove is null');
            } else if (tileAbove.index === 2 || tileAbove.index === 4) {
                isBlocked = true;
                console.log(tileAbove.index);
            }

            if (isBlocked === true) {
                console.log('tileAbove is Solid');
            } else {
                let initialY = player.y;
                player.y = initialY - 64;
                this.playerTileY -= 1;
                console.log('player moves');
            }
        });

        let dKey = this.input.keyboard.addKey('D');

        dKey.on('down', event => {
            console.log('D pressed');
            console.log(worldLayer);
            const tileRight = worldLayer.getTileAtWorldXY(
                player.x + 64,
                player.y,
                true
            );
            console.log(tileRight);
            let isBlocked;
            if (tileRight === null) {
                isBlocked = false;
                console.log('tileRight is null');
            } else if (tileRight.index === 2 || tileRight.index === 4) {
                isBlocked = true;
                console.log(tileRight.index);
            }

            if (isBlocked === true) {
                console.log('tileRight is Solid');
            } else {
                let initialX = player.x;
                player.x = initialX + 64;
                this.playerTileX += 1;
                console.log('player moves');
            }
        });

        let aKey = this.input.keyboard.addKey('A');

        aKey.on('down', event => {
            console.log('A pressed');
            console.log(worldLayer);
            const tileLeft = worldLayer.getTileAtWorldXY(
                player.x - (64 + 32),
                player.y,
                true
            );
            console.log(tileLeft);
            let isBlocked;
            if (tileLeft === null) {
                isBlocked = false;
                console.log('tileLeft is null');
            } else if (tileLeft.index === 2 || tileLeft.index === 4) {
                isBlocked = true;
                console.log(tileLeft.index);
            }

            if (isBlocked === true) {
                console.log('tileLeft is Solid');
            } else {
                let initialX = player.x;
                player.x = initialX - 64;
                this.playerTileX += 1;
                console.log('player moves');
            }
        });

        let sKey = this.input.keyboard.addKey('S');

        sKey.on('down', event => {
            console.log('S pressed');
            console.log(worldLayer);
            const tileBelow = worldLayer.getTileAtWorldXY(
                player.x,
                player.y + 64,
                true
            );
            console.log(tileBelow);
            let isBlocked;
            if (tileBelow === null) {
                isBlocked = false;
                console.log('tileBelow is null');
            } else if (tileBelow.index === 2 || tileBelow.index === 4) {
                isBlocked = true;
                console.log(tileBelow.index);
            }

            if (isBlocked === true) {
                console.log('tileBelow is Solid');
            } else {
                let initialY = player.y;
                player.y = initialY + 64;
                this.playerTileX += 1;
                console.log('player moves');
            }
        });
    }

    update(time, delta) {}
}
