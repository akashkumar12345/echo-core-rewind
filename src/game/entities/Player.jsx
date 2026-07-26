import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {

        // Temporary blue texture
        if (!scene.textures.exists("player")) {
            const graphics = scene.make.graphics({ add: false });

            graphics.fillStyle(0x3498db);
            graphics.fillRect(0, 0, 50, 50);

            graphics.generateTexture("player", 50, 50);
            graphics.destroy();
        }

        super(scene, x, y, "player");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        this.speed = 250;
    }

    move(keys, cursors) {

        this.setVelocity(0);

        if (keys.A.isDown || cursors.left.isDown) {
            this.setVelocityX(-this.speed);
        }

        if (keys.D.isDown || cursors.right.isDown) {
            this.setVelocityX(this.speed);
        }

        if (keys.W.isDown || cursors.up.isDown) {
            this.setVelocityY(-this.speed);
        }

        if (keys.S.isDown || cursors.down.isDown) {
            this.setVelocityY(this.speed);
        }

        this.body.velocity.normalize().scale(this.speed);
    }

}