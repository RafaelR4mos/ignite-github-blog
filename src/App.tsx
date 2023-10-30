import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { GithubUserProvider } from "./context/GithubUserContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <GithubUserProvider>
        <Router />
      </GithubUserProvider>
    </ThemeProvider>
  );
}
