import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { getImgInfo } from "../redux/actions/imgAction";

export const ThumbnailWrapper = styled.div`
    .title {
        height: 30px;
    }
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 800px) {
        width: 100%;
        grid-template-columns: 50% 50%;
    }
    @media (min-width: 900px) {
        width: 100%;
        grid-template-columns: 33% 33% 33%;
    }
    @media (min-width: 1200px) {
        width: 60%;
        grid-template-columns: 25% 25% 25% 25%;
    }
`;

export const Thumbnail = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        object-fit: cover;
    }
    @media (max-width: 800px) {
        img {
            width: 100%;
            object-fit: cover;
        }
    }
`;

const Archive = () => {
    const { img } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const getImgList = async () => {
            await dispatch(getImgInfo("archive"));
        };
        getImgList();
    }, [dispatch]);

    return (
        <>
            <div className="title">ARCHIVE</div>
            <ThumbnailWrapper>
                {[...img].reverse().map((el, idx) => (
                    <Thumbnail key={idx}>
                        <Link to={`/archive/${el.fileName}`}>
                            <img src={el.fileURL} alt="" className="img" />
                        </Link>
                    </Thumbnail>
                ))}
            </ThumbnailWrapper>
        </>
    );
};

export default Archive;
