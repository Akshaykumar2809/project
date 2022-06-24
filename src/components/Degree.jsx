import React from "react";
import styled from "styled-components";

function Degree() {
    return (
        <Container>
            <Text>Bachelor Degree in Electronics And Communication</Text>
            <span>Shri Mata Vaishno Devi University, Katra</span><br/>
            <span>2018-2022</span>
            <br/>
            <br/>
            <Tenth>10th Standard</Tenth>
            <span>K K Public School, Khatauli</span><br/>
            <span>2014-2015</span>
            <br/>
            <br/>
            <br/>
            <Experience>Experience</Experience>

        </Container>
    );
}

const Container = styled.div`
`;
const Text = styled.h3`
font-weight:700;`;
const Tenth = styled.h3``;
const Experience =styled.h1``;
export default Degree;