import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import Resume from "./Resume";
import Port from "./Port";
import Why from "./Why";
import Hire from "./Hire";
import {darkThemeColor} from "../utils";
import { themeColor, hoverEffect } from "../utils";
import { Link } from "react-router-dom";
function Third() {
    return ( 
        <Container>
            <Div>
            <Link to ="/resume"><Badge content="Resume" /></Link></Div>
            <Resume1><Link to="/portfoli"><Badge content="Portfolio"/></Link></Resume1>
            <Whyme><Link to="/whyme"><Badge content="Why Me ?" /></Link></Whyme>
            <Hireme><Link to="hireme"><Badge content="Hire Me ?" /></Link></Hireme>
        </Container>
    );
}

const Container =styled.div`
width:100%;
padding-top:10rem;
height:100%;
display:flex;
align-item: center;
padding-right: 6px;

`;

const Div = styled.div``;
const Resume1 = styled.div`
padding-left: 2rem;
`;
const Whyme = styled.div`
padding-left: 10rem;`;
const Hireme = styled.div`
//padding-top: 10rem;
padding-left: 8rem;`;
export default Third;