import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
const FooterWrapper = styled.div`
    width: 100%;
    background-color: #666;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterContent = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 100%;
    }

    li {
        list-style-type: none;
        margin: 0 30px;
        font-weight: 300;
        color: #ccc;
        font-size: 0.8rem;
    }
    .link {
        margin-top: 10px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.5s all ease;
        color: #ccc;
        font-size: 0.8rem;
        &:hover {
            color: white;
        }

        .icon {
            font-size: 1.3rem;
            margin-right: 5px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <li>@dededef_lab</li>
                <li>데데뎁 랩</li>
                <a
                    href="https://www.instagram.com/dededef_lab/"
                    className="link"
                >
                    <AiOutlineInstagram className="icon" />
                    dededef_lab
                </a>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;
