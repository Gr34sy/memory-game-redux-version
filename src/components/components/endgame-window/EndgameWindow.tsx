import styles from "./endgame.module.css";
// components
import EndButtons from "./end-buttons/EndButtons";
import EndHeader from "./end-header/EndHeader";
import EndTile from "./end-tiles/EndTiles";

type EndGameWindowProps = {
  backAction: () => void;
  players: string[];
  title: string;
};
const EndgameWindow = ({ backAction, players, title }: EndGameWindowProps) => {
  return (
    <div className={styles.endgame}>
      <button
        className="back-button"
        onClick={(e) => {
          backAction();
          e.preventDefault();
        }}
      >
        Back
      </button>

      <EndHeader title={title} />

      {players
        .map((player, i) => {
          return (
            <EndTile
              key={player}
              label={player}
              statistic={`${i} Pairs`}
              isWinner={i > 2}
            />
          );
        })
        .reverse()}

      <EndButtons />
    </div>
  );
};

export default EndgameWindow;
