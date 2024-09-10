// style
import styles from "./game-panel.module.css";
// components
import PlayerTile from "./player-tile/PlayerTile";
// types
import { RootState } from "../../../../lib/redux/store";
import { player } from "../../../../lib/types/playerTypes";
import { activePlayer } from "../../../../lib/types/gameTypes";
// hooks
import { useSelector } from "react-redux";
import SoloModeTiles from "./solo-mode-tiles/SoloModeTiles";

const GamePanel = () => {
  const activePlayerIndex: activePlayer = useSelector(
    (state: RootState) => state.game.activePlayer
  );
  const players: player[] = useSelector(
    (state: RootState) => state.players.value
  );
  const activePlayer = players[activePlayerIndex];

  return (
    <div className={styles.gamepanel}>
      {players.length > 1 &&
        players.map((player, i) => (
          <PlayerTile
            key={`p${i}`}
            name={player.name}
            pairs={player.pairs}
            isActive={player.name === activePlayer.name}
          />
        ))}

      {players.length === 1 && <SoloModeTiles />}
    </div>
  );
};

export default GamePanel;
