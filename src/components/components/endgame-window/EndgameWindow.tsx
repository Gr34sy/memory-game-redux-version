import styles from "./endgame.module.css";
import EndButtons from "./end-buttons/EndButtons";
import EndHeader from "./end-header/EndHeader";

type EndGameWindowProps = {
  backAction: () => void;
  players: string[];
};
const EndgameWindow = ({ backAction, players }: EndGameWindowProps) => {
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

      <EndHeader title="It's a tie!" />

      <EndButtons />
    </div>
  );
};

export default EndgameWindow;
