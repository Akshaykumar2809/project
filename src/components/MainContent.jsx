import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Navbar from "./Navbar";
import Third from "./Third";


function MainContent() {
    return (
        <Container>
            <SubContainer>
                <SectionOne>
                    <ColumnOne1><Image /></ColumnOne1>
                    <ColumnTwo1><Navbar/></ColumnTwo1>
                </SectionOne>
                <SectionTwo>
                    <ColumnOne2><Third /></ColumnOne2>
                    <ColumnTwo2></ColumnTwo2>
                </SectionTwo>
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
display : flex flex-row;
`;
const SubContainer = styled.div`
margin: 0.5rem 0;
height: 80%;
width: 100%;
display: flex;
flex-direction: column;
gap: 4rem;
`;
const Titletext = styled.h3`
height: 20%;
`;
const SectionOne = styled.div`
display: flex;
justify-content: space-between;
height: 40%;
gap: 2rem;
width: 100%;
`;
const ColumnOne1 = styled.div`
display: flex;
gap: 3rem;
`;
const ColumnTwo1 = styled.div`
display: flex;
flex-direction: column;
height: 115%;
width: 100%;
padding-left:8rem;
padding-top:10rem;
`;
const SectionTwo = styled.div`
display: flex;
gap: 2rem;
height: 26vh;
`;
const ColumnOne2 = styled.div``;
const ColumnTwo2 = styled.div``;

export default MainContent;