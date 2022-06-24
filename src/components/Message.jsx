import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import {darkThemeColor} from "../utils";
function Message() {
    return (
        <Container>
            <Text>Send a Message</Text>
            <Name>
                <Input type = "text" placeholder="Your Name" />
            </Name>
            <Email>
                <Input type = "text" placeholder="Your Email" />
            </Email>
            <Mess>
                <Input type = "text" placeholder="Your Message" />
            </Mess>
            <Submit>
                <a href="/"><Badge content="Send Message"/></a>
            </Submit>
        </Container>
    );
}

const Container = styled.div``;
const Name = styled.div``;
const Email = styled.div``;
const Mess= styled.div``;
const Submit = styled.div`
padding-top:5rem;
`;
const Text = styled.h2`
font-weight: 400;
padding-top:2rem;
color:white;`;
const Input = styled.input`
padding-top:4rem;
    background-color: transparent;
    
    height: 20px;
    width: 160px;
    color: #CCC;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #CCC`;


export default Message;