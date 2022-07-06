import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateImgViewInfo } from "../redux/actions/imgAction";
import { Wrapper } from "./WallPaperDetail";

const ArchiveDetail = ({ history, location, match }) => {
    const { id } = useParams();
    const { img } = useSelector((state) => state);
    const { user } = useSelector((state) => state);

    const file = img.filter((el) => el.fileName === id);
    const { fileURL } = file[0];
    const dispatch = useDispatch();

    let viewNum = file[0].view;
    viewNum++;

    useEffect(() => {
        const viewUpdate = async () => {
            await dispatch(
                updateImgViewInfo(
                    file[0].ipArr,
                    "archive",
                    file[0].id,
                    viewNum,
                    user.ip
                )
            );
        };
        viewUpdate();
    }, [dispatch]);

    return (
        <Wrapper>
            <div className="desc">GIF 이미지는 상업적 용도가 아니라면</div>
            <div className="desc">아무렇게나 사용하시면 됩니다!</div>
            <img src={fileURL} alt="" />
        </Wrapper>
    );
};

export default ArchiveDetail;
