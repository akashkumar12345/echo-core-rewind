import Phaser from "phaser";
import BootScene from "../scenes/BootScene";

const gameConfig = {
  type: Phaser.AUTO,

  width: 1280,
  height: 720,

  backgroundColor: "#111111",

  scene: [BootScene],
};

export default gameConfig;