// styles
import styles from "./navbar.module.css";
// logo
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="memory game logotype" />
    </nav>
  );
};

export default Navbar;
