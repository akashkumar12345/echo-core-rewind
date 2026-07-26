import Phaser from "phaser";
import BootScene from "../scenes/BootScene";

const gameConfig = {
  type: Phaser.AUTO,

  width: 1280,
  height: 720,

  parent: "game-container",

  backgroundColor: "#000000",
  physics: {
  default: "arcade",
  arcade: {
    debug: false,
  },
},
  scene: [BootScene],
};

export default gameConfig;