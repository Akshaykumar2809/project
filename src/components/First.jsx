import React from "react";
import styled from "styled-components";
import { themeColor, hoverEffect } from "../utils";
function First() {
    return (
    <Container>
        <Text>One man many Jobs</Text>
        <Txt>Writing Code is just one part of the puzzle. Developing a website consits of 7 phases which includes : Requirement identification, development, testing, deployment and others. When you choose me you just need to choose the design and command any changes if required. Rest I will handle myself.</Txt>
    </Container>
    );
}

const Container =styled.div`
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}`;
const Text= styled.h4`
padding-top:1rem;
padding-left:2rem;
font-weigth: 400;`;
const Txt = styled.h4`
padding-top:1rem;
font-weight: 400;
padding-right:2rem;
padding-left:2rem;`;
export default First;