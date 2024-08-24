// styles
import styles from "./game-field.module.css";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type GameFieldProps = {
  size: "small" | "big";
  content: string;
  status: "active" | "disabled" | "undiscovered";
};

const GameField = ({ size, content, status }: GameFieldProps) => {
  const isIconNeeded = content.startsWith("fa");
  const renderedContent = isIconNeeded ? (
    // @ts-ignore
    <FontAwesomeIcon icon={content} />
  ) : (
    content
  );

  return (
    <div className={`${styles.gamefield} ${styles[size]} ${styles[status]}`}>
      {status !== "undiscovered" && renderedContent}
    </div>
  );
};

export default GameField;
