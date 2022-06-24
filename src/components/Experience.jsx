import React from "react";
import styled from "styled-components";

function Experience() {
    return (<Container>
        <Text>Programming Experience</Text>
        <span>2017-2022</span><br/>
        <span>2017 the year when I witnessed the Power of programming by commanding my computer to print Hello World. </span>
        <br/>
        <br/>
        <br/>
        <br/>
        <Frame>My Favorite Framework</Frame>
        <span>ReactJS</span><br/>
        <span>Give More Power To You</span>
    </Container>);
}

const Container = styled.div``;
const Text = styled.h3`
font-weight: 700;`;
const Frame = styled.h3`
font-weight:700;`;
export default Experience;