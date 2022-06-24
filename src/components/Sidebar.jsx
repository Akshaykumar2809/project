import React from "react";
import styled from "styled-components";
import { darkThemeColor } from "../utils";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import AvatarImage1 from "../assets/images2.png";
import { themeColor, hoverEffect } from "../utils";
function Sidebar() {
    return (
        <Container>
            <ProfileContainer>
                <ImageCard>
                    <Avatar src={AvatarImage1}/>
                </ImageCard>
                <Email className="">Email:
                    Akshaykumarak2809@gmail.com
                </Email>
                <Phone>Phone: </Phone>
                <Number>+918279919947</Number>
                <Div>Find Me On:</Div>
                <Links>
            <Link>
            <a className="linked" href="https://www.linkedin.com/"> <FaLinkedin /> </a> 
            <a className="linked" href="https://github.com/"><AiOutlineGithub /> </a> 
            <a className="linked" href="https://www.instagram.com/"><AiOutlineInstagram /></a></Link></Links>
            </ProfileContainer>
        </Container>
    );
}
const Container = styled.div`
width: 25%;
height: 100% !important;
background-color: blue;
display: flex;
flex-direction: column-reverse;
align-items: center;
gap: 2rem;
`;
const Avatar = styled.image`
height:100%;
width:100%`;
const ImageCard = styled.div`
`;
const Email = styled.h4`
padding-top: 10rem;
padding-left: 4rem;
color: white;
font-weight: 400;
`;
const Number = styled.h4`
padding-left: 4rem;
color: white;
font-weight: 400;
`;
const Div = styled.h4`
padding-top: 1rem;
padding-left: 4rem;
color: white;
font-weight: 400;
`;
const ProfileContainer = styled.div``;
const Phone = styled.h4`
color: white;
font-weight: 400;
padding-left: 4rem;
padding-top: 1rem;
`;
const LinksContainer = styled.div`
height: 100%;
width: 100%;`;
const Links = styled.ul`
list-styled-type: none;
display: flex;
flex-direction: column;
padding-left: 4rem;
margin-bottom :20px;
height: 60%;
`;
const Link = styled.li`
display: flex;
gap: 1rem;
cursor: pointer;
color: white;
`;

export default Sidebar;