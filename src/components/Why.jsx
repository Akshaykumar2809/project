import React from "react";
import styled from "styled-components";
import First from "./First";
import Second from "./Second";
import Third1 from "./Third1";
import Forth from "./Forth";


function Why() {
    return (
    <Container>
        <Text>Why Me?</Text>
        <Txt>I don't just write Code for Your website</Txt>
        <SubContainer>
            <SectionOne>
                <ColumnOne1><First /></ColumnOne1>
                <ColumnTwo1><Third1 /></ColumnTwo1>
            </SectionOne>
            <Txxt>Two Qualities that help me build better products for my Clients.</Txxt>
            <SectionTwo>
                <ColumnOne2><Second/></ColumnOne2>
                <ColumnTwo2><Forth/></ColumnTwo2>
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
display : flex flex-row;`;
const Text = styled.h1``;
const Txxt = styled.h3`
padding-bottom:1rem;`;
const Txt = styled.h3`
padding-top:10px;
padding-bottom:10px;`;
const SubContainer = styled.div`
margin: 0.5rem 0;
height: 90%;
width: 100%;
display: flex;
flex-direction: column;
gap:5px`;
const SectionOne = styled.div`
display: flex;
justify-content: space-between;
height: 40%;
gap: 2rem;
width: 100%;`;
const SectionTwo = styled.div`
display: flex;
justify-content: space-between;
height: 40%;
gap: 2rem;
width: 100%;`;
const ColumnOne1 = styled.div`
display: flex;

justify-content: space-between;
height: 90%;
gap: 2rem;
width: 100%;
`;
const ColumnTwo1 = styled.div`
display: flex;

justify-content: space-between;
height: 90%;
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

justify-content: space-between;
height: 100%;
gap: 2rem;
width: 100%;
`;




export default Why;