import styles from "./end-header.module.css";

type EndHeaderProps = {
  title: string;
};

const EndHeader = ({ title }: EndHeaderProps) => {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <p>Game over! Here are the results…</p>
    </div>
  );
};

export default EndHeader;
