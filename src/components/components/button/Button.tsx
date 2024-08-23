import { PropsWithChildren } from "react";
import { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "className"> & {
  buttonType: "primary" | "secondary" | "selection" | "menu";
  isActive?: boolean;
};

const Button = ({
  children,
  buttonType,
  isActive,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[`button--${buttonType}`]} ${isActive ? styles.active : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
