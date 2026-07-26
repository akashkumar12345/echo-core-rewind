import { useEffect, useRef } from "react";
import Phaser from "phaser";
import gameConfig from "./config/gameConfig";

function Game() {
  const gameRef = useRef(null);

  useEffect(() => {
    const game = new Phaser.Game({
      ...gameConfig,
      parent: gameRef.current,
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div
      ref={gameRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default Game;