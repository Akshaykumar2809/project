import React from "react";
import styled from "styled-components";
import { themeColor, hoverEffect } from "../utils";
function Third1() {
    return (
    <Container>
        <Text>Fits in every budget</Text>
        <Txt>I Understand not everyone can afford premium pricing. Therefore, I can work under different budget project. And I try to minimise the Cost of everything from hosting to design and maintainence.</Txt>
    </Container>
    );
}

const Container =styled.div`
transition: 0.3s ease-in-out;
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

export default Third1;