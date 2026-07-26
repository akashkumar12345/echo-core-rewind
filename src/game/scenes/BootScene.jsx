import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  create() {
    this.add.text(420, 340, "Echo Core: Rewind", {
      fontSize: "42px",
      color: "#ffffff",
    });
  }
}