import {createGlobalStyle} from 'styled-components';
import bgImg from '../../img/bg.jpeg'

export const GlobalStyle = createGlobalStyle `

* {
    margin: 0px;
    padding: 0px;
}

body {
    color: black;
    font-family: 'Lora', serif;
    background: url(${bgImg}) ;
    background-size: cover;
    background-position: center;
    
}



`;