import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import {darkThemeColor} from "../utils";
function Port() {
    return (
        <Container>
            <Text>Portfolio</Text>
            <Company>Techenutia</Company>
            <Txt><span>Techenutia is a startup that aims to achieve Social</span><br/><span> Empowerment through Financial, Intellectual,</span><br/><span> and Technological Help.</span></Txt>
            <Visit><a href="https://techenutia.com/"><Badge content="Visit the Website"/></a></Visit> 
        </Container>
    );
}

const Container = styled.div``;
const Text = styled.h1`
font-size:3rem;
font-weight:400;
padding-left:6rem;
padding-top:2rem;`;
const Company = styled.h2`
font-weight:300;
font-size:2rem;
padding-top:4rem;
padding-left:6rem;`;
const Txt = styled.h3`
padding-top:1rem;
padding-left:6rem;
font-weight:400;`;
const Visit = styled.div`
padding-left:6rem;
padding-right:10rem;
padding-top:1rem;`;

export default Port;