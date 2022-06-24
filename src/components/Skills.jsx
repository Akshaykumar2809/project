import React from "react";
import styled from "styled-components";

function Skills() {
    return (
    <Container>
        <Text>Trainee Developer</Text>
        <span>Techenutia(2021-2022)</span><br/>
        <span>Worked as a part of Team to Build a Web</span><br/>
        <span>App from Scratch</span>
        <br/>
        <br/>
        <br/>
        <Skill>Skills</Skill>
        
        <Full>My Frontend Favorites</Full>
        <span>HTML, CSS, Javascript, BootStrap</span><br/>
        <span>Let's Build Something Special</span>

    </Container>);
}

const Container =styled.div``;
const Text = styled.h3`
font-Weight:700;`;
const Skill = styled.h1`
`;
const Full = styled.h3`
font-weight:700;`;

export default Skills;