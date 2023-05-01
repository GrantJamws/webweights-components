export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline";
  size?: "small" | "medium" | "large";
  children?: JSX.Element | string | number;
}