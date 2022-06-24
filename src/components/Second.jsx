import React from "react";
import styled from "styled-components";
import { themeColor, hoverEffect } from "../utils";
function Second() {
    return (
        <Container>
            <Text>Creativity</Text>
            <Txt>I am a creative person that is what enables me to create beautiful designs. While building a website from scratch I build the UI according to your requirements and add an extra touch of Simplicity & Sophistication. If you provide a premade theme or UI for your project still I would recommend changes in that if it Can be made any better.</Txt>
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

export default Second;