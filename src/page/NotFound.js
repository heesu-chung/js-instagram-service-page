import React from "react";
import NotFoundImg from "../assets/image/ladder.gif";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 1.3rem;
    font-weight: 700;
    @media (max-width: 800px) {
        width: 95%;
        margin-bottom: 75%;
        img {
            width: 100%;
        }
    }
`;

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <img src={NotFoundImg} alt="" />
            <div>여기는 페이지가 없어요..</div>
        </NotFoundWrapper>
    );
};

export default NotFound;
