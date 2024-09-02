// styles
import styles from "./homepage.module.css";
// components
import { Link } from "react-router-dom";
// hooks and utils
import { useSelector } from "react-redux";
import { RootState }  from "../../../lib/redux/store";
import { settings } from "../../../lib/settingsTypes";

const Homepage = () => {
  const settings: settings = useSelector((state: RootState) => state.settings.value);
  const gameRunning: boolean = useSelector((state: RootState) => state.game.isRunning) 

  return (
    <main className={styles.homepage}>
      <div>Home</div>

        {gameRunning ? "y" : "n"}


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
