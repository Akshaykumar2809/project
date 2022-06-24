import React from "react";
import styled from "styled-components";
import { themeColor, hoverEffect } from "../utils"
 
function Get() {
    return (
        <Container>
            <Text>Get In Touch</Text>
            <Phone>
                <Txt>Phone:</Txt>
                <br/>
                <span>+91 8279919947</span><br/>
                <br/>
                <spam>+91 9719293942</spam>
            </Phone>
            <Email>
                <Emmm>Email:</Emmm>
                <br/>
                <span>akshaykumarak2809@gmail.com</span><br/>
                <br/>
                <span>akshaykumargujjar123@gmail.com</span>
            </Email>
            <Address>
                <Add>Address:</Add>
                <br/>
                <span>63,Saini Nagar, Khatauli-251201</span>
            </Address>
        </Container>
    );
}

const Container = styled.div``;
const Address = styled.div`
paddin-top: 2rem;
padding-left:2rem;`;
const Add = styled.h3`
font-weight:600;`;
const Email =styled.div`
padding-top:2rem;
padding-left:2rem;`;
const Emmm = styled.h3`
font-weight:600;`;
const Text = styled.h1`
font-size:2rem;
font-weight:600;
padding-bottom:3rem;
padding-top:3rem;`;
const Phone = styled.div`
width:150%;
padding-left:2rem;
padding-bottom:2rem;
padding-top:1rem;
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}`;
const Txt = styled.h3`
font-weight:600;`;
export default Get;