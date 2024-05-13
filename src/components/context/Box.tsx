import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box: React.FC = () => {
    const theme = useContext(ThemeContext);
    return (
        <>
            <h1 style={{ backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme context</h1>
            <h3 style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text}}>Theme context</h3>
        </>
    );
}
