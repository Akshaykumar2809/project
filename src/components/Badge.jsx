import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils";

function Badge({content}) {
    return (
        <Div>{content}</Div>
    );
}

const Div = styled.div`
padding: 0.7rem 2rem;
border-radius: 1rem;
font-weight:500;
font-size:25px;
color: white;
background-color: ${themeColor};
cursor: pointer;
`;
export default Badge;