// styles
import styles from "./theme-dropdown.module.css";
// types
import { themes } from "../../../../../lib/settingsTypes";

type ThemeDropdownProps = {
  action: (value: themes) => void;
  themes: themes[];
};

const ThemeDropdown = ({ action, themes }: ThemeDropdownProps) => {
  return <div>{themes.map((theme) => theme)}</div>;
};

export default ThemeDropdown;
