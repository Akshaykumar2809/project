import React from "react";
import styled from "styled-components";
import { themeColor, hoverEffect } from "../utils";
function Forth() {
    return (
        <Container>
        <Text>Curiosity</Text>
        <Txt>Curiosity is necessary for understanding the real requirements of clients. Sometimes websites lack requirements that client and the developer never discussed. This happens often because the developer doesn't ask enough questions from the client to gather all the information.</Txt>
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

export default Forth;