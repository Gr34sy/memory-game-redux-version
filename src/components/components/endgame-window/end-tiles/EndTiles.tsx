import styles from "./end-tiles.module.css";

type TileProps = {
  label: string;
  statistic: string;
  isWinner?: boolean;
};

const EndTile = ({ label, statistic, isWinner }: TileProps) => {
  return (
    <div className={`${styles.tile} ${isWinner ? styles["winner-tile"] : ""}`}>
      <div className={styles.label}>{label}</div>

      <div className={styles.statistic}>{statistic}</div>
    </div>
  );
};

export default EndTile;
