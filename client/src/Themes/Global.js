import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,html {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    transition: all 0.25s linear;
  }

  .mymodal{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.toggleBorder};
  }
  
  .button,.sendButton,.backgroundBlue,.infoBar{
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.button};
  }
  
  .colorWhite{
    color: ${({ theme }) => theme.messageText};
  }

  .backgroundLight{
    background: ${({ theme }) => theme.messageBox};
  }
  }`;
