import React from "react";
import styled from "styled-components";

function Navbar() {
    return(
        <NavbarContainer>
            <DIV>Hi I'm AKSHAY KUMAR</DIV>
            <div><h2>Trainee Web Developer</h2>
            <br/>
            <Text>I love what I do and I do what clients love and work with great clients all over the world to create thoughtful and purposeful websites.</Text></div>
        </NavbarContainer>
    );

}

const NavbarContainer = styled.div``;
const DIV = styled.h1`
font-weight:600;
font-size:40px;`;
const Text = styled.h3`
font-weight:400;`; 

export default Navbar;