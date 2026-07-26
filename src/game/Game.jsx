import { useEffect, useRef } from "react";
import Phaser from "phaser";
import gameConfig from "./config/gameConfig";

function Game() {
  const containerRef = useRef(null);

  useEffect(() => {
    const game = new Phaser.Game({
      ...gameConfig,
      parent: containerRef.current,
    });

    return () => game.destroy(true);
  }, []);

  return <div id="game-container" ref={containerRef}></div>;
}

export default Game;