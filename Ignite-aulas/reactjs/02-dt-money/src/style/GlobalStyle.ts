import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E40;
        --blue: #5429CC;
        
        --blue-light: #6933FF;
        
        --text-title: #363F5F;
        --text-body: #969CB3;
        
        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }
    html {
        //font-size: 16px
        @media(max-width:1080px) {
            font-size: 93.75%; //15px
        }

        @media(max-width:720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    li {
        list-style: none;
    }

`