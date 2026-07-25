import gameConfig from "./config/gameConfig";

function Game() {
  return (
    <div
      style={{
        width: gameConfig.width,
        height: gameConfig.height,
        backgroundColor: gameConfig.backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        fontSize: "32px",
        fontWeight: "bold",
      }}
    >
      Echo Core: Rewind
    </div>
  );
}

export default Game;