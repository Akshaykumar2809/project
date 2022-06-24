import React from "react";
import styled from "styled-components";
import Get from "./Get";
import Message from "./Message";
import { themeColor, hoverEffect } from "../utils";

function Hire() {
    return (
    <Container>
        <SubContainer>
            <ColumnOne><Message/></ColumnOne>
            <ColumnTwo><Get/></ColumnTwo>
        </SubContainer>
    </Container>
    );
}

const Container = styled.div`
Width: 75%;

background: linear-gradient(to bottom right, white 0%right, #e6e4ff 70%);
border-bottom-radius: 2rem;
border-top-right-radius: 2rem;
margin: 1rem 2rem 2rem 2rem;
display : flex flex-row;`;
const SubContainer = styled.div`
margin: 0.5rem 0;
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
gap:5px;`;
const ColumnOne = styled.div`display: flex;

justify-content: space-between;
padding-left:4rem;
height: 80%;
gap: 2rem;
width: 50%;
background-color:black;
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}`;
const ColumnTwo = styled.div`
display: flex;

justify-content: space-between;
height: 100%;
gap: 2rem;
padding-left:8rem;
width: 70%;
`;

export default Hire;