import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "./theme";
import { selectIsDarkTheme } from "../../common/themeSlice";
import Homepage from "../../features/Homepage";


function App() {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
            <Normalize />
            <GlobalStyle />
            <Homepage />
        </ThemeProvider>
    );
}

export default App;