import Phaser from "phaser";

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
  this.player = this.add.rectangle(200, 200, 50, 50, 0x3498db);

  // Enable physics
  this.physics.add.existing(this.player);

  this.player.body.setCollideWorldBounds(true);

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

  this.speed = 250;
}

update() {
  const body = this.player.body;

  body.setVelocity(0);

  if (this.keys.A.isDown || this.cursors.left.isDown) {
    body.setVelocityX(-this.speed);
  }

  if (this.keys.D.isDown || this.cursors.right.isDown) {
    body.setVelocityX(this.speed);
  }

  if (this.keys.W.isDown || this.cursors.up.isDown) {
    body.setVelocityY(-this.speed);
  }

  if (this.keys.S.isDown || this.cursors.down.isDown) {
    body.setVelocityY(this.speed);
  }

  body.velocity.normalize().scale(this.speed);
}
}