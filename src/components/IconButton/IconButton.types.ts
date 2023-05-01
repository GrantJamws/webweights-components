import { JSXElementConstructor, ReactElement } from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost";
  icon: ReactElement;
  isLoading?: boolean;
}