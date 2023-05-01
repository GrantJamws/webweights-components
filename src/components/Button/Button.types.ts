export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost";
  children?: JSX.Element | string | number;
  isLoading?: boolean;
}