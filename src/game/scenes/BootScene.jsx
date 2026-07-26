import Phaser from "phaser";
import MainScene from "./MainScene";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    console.log("Loading Assets...");
  }

  create() {
    console.log("Boot Complete");

    this.scene.add("MainScene", MainScene, true);

    this.scene.stop("BootScene");
  }
}