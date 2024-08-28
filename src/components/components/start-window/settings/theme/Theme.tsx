// styles
import styles from "./theme.module.css";

// types
import { themes } from "../../../../../lib/settingsTypes";
import { Dispatch, SetStateAction } from "react";

// lib utilities
import avialableThemes from "../../../../../lib/avialableThemes";

// components
import Button from "../../../button/Button";
import SettingsBox from "../settings-box/SettingsBox";

// Theme Dropdown Component
type ThemeDropdownProps = {
  action: (value: themes) => void;
  themes: themes[];
};

const ThemeDropdown = ({ action, themes }: ThemeDropdownProps) => {
  return (
    <div>
      <Button
        buttonType="selection"
        onClick={() => {}}
        // isActive={theme === "random"}
      >
        Random
      </Button>
      {themes.map((theme) => theme)}
    </div>
  );
};

// Theme Component
type ThemeProps = { setTheme: Dispatch<SetStateAction<themes>> };

const Theme = ({ setTheme }: ThemeProps) => {
  return (
    <SettingsBox label="Select Theme" bigItems>
      <ThemeDropdown action={setTheme} themes={avialableThemes} />
    </SettingsBox>
  );
};

export default Theme;
