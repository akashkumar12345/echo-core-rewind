import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    this.cameras.main.setBackgroundColor("#1e1e1e");

    this.add.text(420, 340, "Main Scene", {
      fontSize: "40px",
      color: "#00ff00",
    });
  }

  update() {}
}