import React from "react";
import styled from "styled-components";

import AskedHome from "../components/cards/AskedHome";
import WallPaperHome from "../components/cards/WallPaperHome";
import ArchiveHome from "../components/cards/ArchiveHome";

const HomeWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 95%;
    }
    .link {
        text-decoration: none;
        color: black;
    }

    .menu-title {
        width: 60%;
        height: 5rem;
        font-size: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;

        border-bottom: 1px solid #ccc;
    }
`;

const Home = () => {
    return (
        <>
            <HomeWrapper>
                <WallPaperHome></WallPaperHome>
                <AskedHome></AskedHome>
                <ArchiveHome></ArchiveHome>
            </HomeWrapper>
        </>
    );
};

export default Home;
