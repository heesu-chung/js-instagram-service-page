import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MoreInfo } from "./AskedHome";
import { Thumbnail, ThumbnailWrapper } from "../../page/Archive";
import { getImgInfo } from "../../redux/actions/imgAction";

const ArchiveHome = () => {
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
            <MoreInfo>
                <div className="title">Archive</div>
                <Link to="/archive" className="link">
                    더보기
                </Link>
            </MoreInfo>
            <ThumbnailWrapper>
                {img.length !== 0 ? (
                    [...img]
                        .reverse()
                        .splice(img.length - 6, 6)
                        .map((el, idx) => (
                            <Link className="link" to={`/archive`} key={idx}>
                                <Thumbnail>
                                    <img src={el.fileURL} alt="" />
                                </Thumbnail>
                            </Link>
                        ))
                ) : (
                    <div></div>
                )}
            </ThumbnailWrapper>
        </>
    );
};

export default ArchiveHome;
