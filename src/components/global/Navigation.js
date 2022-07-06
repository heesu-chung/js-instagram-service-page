import React from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
import title from "../../assets/image/title.png";

const NavWrapper = styled.div`
    width: 100%;

    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: white;
    position: fixed;

    .link {
    }

    @media (max-width: 1200px) {
    }
    @media (max-width: 800px) {
        height: 60px;
        display: none;
    }
`;
const Nav = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 10005;
    .link {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 0.9rem;
        color: #999;
        margin: 0 20px;
        cursor: pointer;
        list-style-type: none;
        transition: 0.5s all ease-in;
        text-decoration: none;
        &:hover {
            color: #555;
        }
    }
`;
const HomeButtonWide = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
    @media (max-width: 900px) {
        width: 100px;
        height: 30px;
        border: 1px solid black;
        z-index: 105;
        position: fixed;
        top: 5px;
        left: 5px;
    }
`;
const Blank = styled.div`
    height: 60px;
    @media (max-width: 1200px) {
    }
    @media (max-width: 800px) {
        height: 70px;
    }
`;
const MenuDiv = styled.div`
    @media (max-width: 800px) {
        z-index: 101;
        position: fixed;
        left: 20px;
        top: 20px;
        font-size: 1.5rem;
        color: #666;
        cursor: pointer;

        &:hover {
        }

        .icons {
        }
    }
`;

const boxSlide = keyframes`
    0% {
        top: -300px;
        opacity: 0;
    }
    100% {
        top: 0px;
        opacity: 1;
    }
`;

const MenuContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 0px;

    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    align-items: center;
    ${(props) =>
        props.visible &&
        css`
            animation: ${boxSlide} 0.5s;
            box-shadow: 0 0 10px 0 #ccc;
            height: 300px;
            color: black;
        `};
`;

const MenuBox = styled.div`
    width: 100%;
    position: absolute;
    z-index: 1004;
    padding-top: 50px;
    display: flex;
    text-align: center;
    flex-direction: column;
    .link {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 300;
        text-decoration: none;
        font-size: 1.1rem;
        margin: 15px 0;
        color: black;
    }
    .close {
        color: #aaa;
        font-size: 1.5rem;
    }
`;

const ButtonDiv = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
        text-decoration: none;
    }

    @media (min-width: 1200px) {
        display: none;
    }
`;

const Blacked = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: black;
    opacity: 0.3;
`;

const Navigation = () => {
    const [clicked, setClicked] = useState(false);

    const onMenuClick = (e) => {
        e.preventDefault();
        setClicked(!clicked);
    };

    const onClose = (e) => {
        e.preventDefault();
        setClicked(false);
    };
    return (
        <>
            {clicked ? (
                <>
                    <Blacked />
                    <MenuContainer visible={clicked} className="menu-bar">
                        <MenuBox visible={clicked}>
                            <Link
                                to="/about"
                                className="link"
                                onClick={clicked}
                            >
                                생각의 모양
                            </Link>
                            <Link
                                to="/wall-paper"
                                className="link"
                                onClick={clicked}
                            >
                                배경화면
                            </Link>
                            <Link
                                to="/asked"
                                className="link"
                                onClick={clicked}
                            >
                                Asked
                            </Link>
                            <Link
                                to="/archive"
                                className="link"
                                onClick={clicked}
                            >
                                아카이브
                            </Link>
                        </MenuBox>
                    </MenuContainer>
                </>
            ) : (
                <></>
            )}

            <MenuDiv>
                {!clicked ? (
                    <AiOutlineMenu onClick={onMenuClick} className="icons" />
                ) : (
                    <AiOutlineClose onClick={onMenuClick} className="icons" />
                )}
            </MenuDiv>

            <ButtonDiv>
                <HomeButtonWide>Home</HomeButtonWide>
                <Link to="/" className="link">
                    <img
                        src={title}
                        alt=""
                        width="125"
                        style={{
                            justifyContent: "center",
                        }}
                    />
                </Link>
            </ButtonDiv>

            <NavWrapper>
                <Link to="/" className="link">
                    <img src={title} alt="" width="125" />
                </Link>
                <Nav>
                    <Link to="/about" className="link">
                        생각의 모양
                    </Link>
                    <Link to="/wall-paper" className="link">
                        배경화면
                    </Link>
                    <Link to="/asked" className="link">
                        Asked
                    </Link>
                    <Link to="/archive" className="link">
                        아카이브
                    </Link>
                </Nav>
            </NavWrapper>
            <Blank />
        </>
    );
};

export default Navigation;
