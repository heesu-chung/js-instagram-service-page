import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getWallpaperInfo } from "../redux/actions/wallpaperAction";

export const PageWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 95%;
    }
`;

const WallPaperWrapper = styled.div`
    margin: 50px auto;
    width: 60%;
    display: grid;
    grid-template-columns: repeat() (2, 1fr);
    /* gap: 20px; */
    @media (max-width: 800px) {
        width: 100%;
        grid-template-columns: 50% 50%;
    }
    @media (min-width: 900px) {
        width: 100%;
        grid-template-columns: 33% 33% 33%;
    }
    @media (min-width: 1200px) {
        width: 100%;
        gap: 10px;
        row-gap: 50px;
        grid-template-columns: 33% 33% 33%;
    }
`;
const WallPaperBlock = styled.div`
    cursor: pointer;

    img {
        width: 100%;
        height: 600px;
        object-fit: cover;
    }
    .title {
        margin-top: 15px;
        margin-bottom: 50px;
        width: 100%;
        font-size: 0.8rem;
        text-align: center;
        font-weight: 500;
    }

    @media (max-width: 800px) {
        img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
    }
`;
const paging = styled.div``;

const WallPaper = () => {
    let { wallpaper } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const getImgList = async () => {
            await dispatch(getWallpaperInfo("wallpaper"));
        };
        getImgList();
    }, [dispatch]);

    return (
        <PageWrapper>
            <div>WALLPAPER</div>
            <WallPaperWrapper>
                {[...wallpaper].length !== 0 ? (
                    [...wallpaper].reverse().map((el, idx) => (
                        <WallPaperBlock key={idx}>
                            <Link
                                to={`/wall-paper/${el.fileName}`}
                                className="link"
                            >
                                <img src={el.fileURL} alt="" />
                            </Link>
                            <div className="title">
                                {el.fileName.split("").splice(0, 20).join("")}
                            </div>
                        </WallPaperBlock>
                    ))
                ) : (
                    <div></div>
                )}
            </WallPaperWrapper>
        </PageWrapper>
    );
};

export default WallPaper;
