import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./Components/Join/Join";
import Chat from "./Components/Chat/Chat";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes/Theme";
import { GlobalStyles } from "./Themes/Global";
import Toggle from "./Themes/Toggle/Toggle";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
