import React from "react";
import styled from "styled-components";
import Degree from "./Degree";
import Skills from "./Skills";
import Twelth from "./Twelth";
import Experience from "./Experience";
function Resume() {
    return (
        
        <Container>
            <Text>Education</Text>
            <SubContainer>
                <SectionOne>
                    <ColumnOne1><Degree /></ColumnOne1>
                    <ColumnTwo1><Twelth /></ColumnTwo1>
                </SectionOne>
                <SectionTwo>
                    <ColumnOne2><Skills /></ColumnOne2>
                    <ColumnTwo2><Experience /></ColumnTwo2>
                </SectionTwo>
            </SubContainer>
        </Container>
        
    );
}

const Text = styled.h1`
font-size:2rem;`;
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
height: 90%;
width: 100%;
display: flex;
flex-direction: column;
gap:5px;`;
const SectionOne = styled.div`
display: flex;
justify-content: space-between;
height: 50%;
gap: 2rem;
width: 100%;
`;
const SectionTwo = styled.div`
display: flex;
justify-content: space-between;
height: 50%;
gap: 2rem;
width: 100%;`;
const ColumnOne1 = styled.div`
display: flex;

justify-content: space-between;
height: 100%;
gap: 2rem;
width: 100%;

`;
const ColumnTwo1 = styled.div`
display: flex;
padding-left:8rem;
justify-content: space-between;
height: 100%;
gap: 2rem;
width: 100%;
`;
const ColumnOne2 = styled.div`
display: flex;

justify-content: space-between;
height: 100%;
gap: 2rem;
width: 100%;
`;
const ColumnTwo2 = styled.div`
display: flex;
padding-left:8rem;
justify-content: space-between;
height: 100%;
gap: 2rem;
width: 100%;
`;

export default Resume;