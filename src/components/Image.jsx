import React from "react";
import styled from "styled-components";
import AvatarImage from "../assets/image.jpg";
import { themeColor, hoverEffect } from "../utils";
function Image (){
    return (
        <ImageCard>
            <Avatar src={AvatarImage}/>
        </ImageCard>);
}

const ImageCard = styled.div`
height: 150%;
width: 19rem;
padding-top:10rem;
background-color: ${themeColor};
padding: 2rem;
padding-left; 10rem;
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}
`; 

const Avatar = styled.img`
height:100%;
width:100%;
`;

export default Image;