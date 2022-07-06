import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { updateWallpaperViewInfo } from "../redux/actions/wallpaperAction";

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
    .desc {
        margin: 10px auto;
        font-size: 1.2rem;
    }

    img {
        margin-top: 40px;
        width: 70%;
        margin-bottom: 50px;
    }

    @media (max-width: 800px) {
        width: 95%;
        .desc {
            margin: 10px auto;
            font-size: 0.8rem;
            text-align: center;
        }
        img {
            margin-top: 40px;
            width: 100%;
            margin-bottom: 50px;
        }
    }
`;

const WallPaperDetail = ({ history, location, match }) => {
    const { id } = useParams();
    const { wallpaper } = useSelector((state) => state);
    const { user } = useSelector((state) => state);

    const file = wallpaper.filter((el) => el.fileName === id);
    const { fileURL } = file[0];
    const dispatch = useDispatch();

    let viewNum = file[0].view;
    viewNum++;

    useEffect(() => {
        const viewUpdate = async () => {
            await dispatch(
                updateWallpaperViewInfo(
                    file[0].ipArr,
                    "wallpaper",
                    file[0].id,
                    viewNum,
                    user.ip
                )
            );
        };
        viewUpdate();
    });

    return (
        <Wrapper>
            <div className="desc">이미지 꾸욱 눌러서 다운로드 해주세요!</div>

            <img src={fileURL} alt="" />
        </Wrapper>
    );
};

export default WallPaperDetail;
