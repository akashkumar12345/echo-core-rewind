import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    this.cameras.main.setBackgroundColor("#1e1e1e");

    // Player
    this.player = this.add.rectangle(640, 360, 50, 50, 0x3498db);

    // Keyboard Input
    this.cursors = this.input.keyboard.createCursorKeys();

    this.keys = this.input.keyboard.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,
    });

    this.speed = 250;
  }

  update(time, delta) {
    const move = (this.speed * delta) / 1000;

    if (this.keys.A.isDown || this.cursors.left.isDown) {
      this.player.x -= move;
    }

    if (this.keys.D.isDown || this.cursors.right.isDown) {
      this.player.x += move;
    }

    if (this.keys.W.isDown || this.cursors.up.isDown) {
      this.player.y -= move;
    }

    if (this.keys.S.isDown || this.cursors.down.isDown) {
      this.player.y += move;
    }
  }
}