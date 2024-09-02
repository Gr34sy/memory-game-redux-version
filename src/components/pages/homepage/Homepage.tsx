// styles
import styles from "./homepage.module.css";
// components
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
// hooks and utils
import { useSelector } from "react-redux";
import { RootState }  from "../../../lib/redux/store";
import { settings, themes } from "../../../lib/settingsTypes";
import generateBoard from "../../../lib/game-handlers/generateBoard";

const Homepage = () => {
  const settings: settings = useSelector((state: RootState) => state.settings.value);
  const gameRunning: boolean = useSelector((state: RootState) => state.game.isRunning);
  
  const board = generateBoard("uncategorized","g6");

  return (
    <main className={styles.homepage}>
      <div>Home</div>

        <Button buttonType="primary" onClick={() => console.log(board)}>Test</Button>


        <div>
          <h3>Current Settings:</h3>
          <br /> 
          <p>Board: {settings.board}</p>
          <p>Players: {settings.players.amount}</p>
          <p>Theme: {settings.theme}</p>
        </div>

        <br/> 


      <Link to="/game">Game</Link> 

    </main>
  );
};

export default Homepage;
