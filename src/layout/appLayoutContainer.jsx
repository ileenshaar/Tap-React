import { useThemeContext } from "../context/theme-context";
import "./app.layout.css";

export function LayoutContainer({ children }) {
  const { theme } = useThemeContext();
  return <div className={`${theme}`}>{children}</div>;
}
