import styles from "./game-panel.module.css";

import PlayerTile from "./player-tile/PlayerTile";

const GamePanel = () => {
  return (
    <div className={styles.gamepanel}>
      <PlayerTile name="Lukoki" pairs={2} isActive />
      <PlayerTile name="Andreas" pairs={2} />
      <PlayerTile name="Jan" pairs={3} />
      <PlayerTile name="Fassnacht" pairs={0}  />
    </div>
  );
};

export default GamePanel;
