import Phaser from "phaser";
import Player from "../entities/Player";
export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        // World size
        this.worldWidth = 2500;
        this.worldHeight = 1500;

        this.cameras.main.setBackgroundColor("#1e1e1e");

        // Set world bounds
        this.physics.world.setBounds(0, 0, this.worldWidth, this.worldHeight);

        // Player

        // Enable physics

        this.player = new Player(this, 200, 200);
        // Camera
        this.cameras.main.setBounds(
            0,
            0,
            this.worldWidth,
            this.worldHeight
        );

        this.cameras.main.startFollow(this.player, true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.keys = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D,
        });
        this.drawGrid();

        // this.speed = 250;
    }

 update() {
    this.player.move(this.keys, this.cursors);
}

    drawGrid() {
    const graphics = this.add.graphics();

    graphics.lineStyle(1, 0x2c2c2c, 1);

    const gridSize = 64;

    for (let x = 0; x <= this.worldWidth; x += gridSize) {
        graphics.moveTo(x, 0);
        graphics.lineTo(x, this.worldHeight);
    }

    for (let y = 0; y <= this.worldHeight; y += gridSize) {
        graphics.moveTo(0, y);
        graphics.lineTo(this.worldWidth, y);
    }

    graphics.strokePath();
}
}
