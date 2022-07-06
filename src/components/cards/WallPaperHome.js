import React, { useEffect } from "react";
import styled from "styled-components";
import { MoreInfo } from "./AskedHome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWallpaperInfo } from "../../redux/actions/wallpaperAction";

const CardsWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    @media (max-width: 800px) {
        width: 95%;
    }
`;
const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    align-items: center;
    font-size: 1rem;
    font-weight: 300;

    .img {
        width: 300px;
        height: 600px;

        margin: 10px 0;
        background-color: #eee;

        @media (max-width: 800px) {
            width: 160px;
            height: 300px;
        }
    }
    .title {
        font-size: 0.9rem;
        font-weight: 500;
    }
    .date {
        font-size: 0.9rem;
        color: #aaa;
        text-align: right;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .content {
        margin-bottom: 10px;
    }
`;

const WallPaperHome = () => {
    const { wallpaper } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const getImgList = async () => {
            await dispatch(getWallpaperInfo("wallpaper"));
        };
        getImgList();
    }, [dispatch]);

    return (
        <>
            <MoreInfo>
                <div className="title">WALLPAPER</div>
                <Link to="/wall-paper" className="link">
                    더보기
                </Link>
            </MoreInfo>
            <CardsWrapper>
                {[...wallpaper]
                    .splice(wallpaper.length - 3, 2)
                    .map((el, idx) => (
                        <Link
                            to={`/wall-paper/${el.fileName}`}
                            className="link"
                            key={idx}
                        >
                            <CardWrapper>
                                <img src={el.fileURL} alt="" className="img" />
                                <div className="title">
                                    {el.fileName
                                        .split("")
                                        .splice(0, 15)
                                        .join("")}
                                </div>
                            </CardWrapper>
                        </Link>
                    ))}
            </CardsWrapper>
        </>
    );
};

export default WallPaperHome;
