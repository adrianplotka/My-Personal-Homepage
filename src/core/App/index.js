import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Homepage from "../../features/Homepage";
import { GlobalStyle } from "./GlobalStyle";
import { colorNames as theme } from './theme';

function App() {
    return (
        <ThemeProvider theme={theme} >
            <Normalize />
            <GlobalStyle />
            <Homepage />
        </ThemeProvider>
    );
}

export default App;