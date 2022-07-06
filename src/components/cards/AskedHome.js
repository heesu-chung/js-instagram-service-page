import React, { useEffect } from "react";
import styled from "styled-components";
import { AskedCard, AskedWrapper } from "../../page/Asked";
import { MdQuestionAnswer, MdOutlineQuestionAnswer } from "react-icons/md";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAskedList } from "../../redux/actions/askedAction";
export const MoreInfo = styled.div`
    font-family: "Noto Sans KR", sans-serif;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
    .title {
        width: 50%;
        font-weight: 700;
    }
    .link {
        width: 50%;
        font-size: 0.9rem;
        text-align: right;
        color: #ccc;
        transition: 0.3s all ease;

        &:hover {
            color: black;
        }
    }
    @media (max-width: 800px) {
        width: 95%;
        .title {
            width: 50%;
            font-weight: 700;
        }
        .link {
            width: 50%;
            font-size: 0.9rem;
            text-align: right;
            color: #ccc;
            transition: 0.3s all ease;

            &:hover {
                color: black;
            }
        }
    }
`;

const AskedHome = () => {
    let { asked } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const getList = async () => {
            await dispatch(getAskedList());
        };
        getList();
    }, [dispatch]);

    return (
        <>
            <MoreInfo>
                <div className="title">ASKED</div>
                <Link to="/asked" className="link">
                    더보기
                </Link>
            </MoreInfo>
            <AskedWrapper>
                {[...asked].splice(0, 3).map((el, idx) => (
                    <AskedCard key={idx}>
                        <div className="info">
                            <div className="user-info">
                                {el.answer === "" ? (
                                    <MdOutlineQuestionAnswer className="icon waiting" />
                                ) : (
                                    <MdQuestionAnswer className="icon answered" />
                                )}

                                <div className="question-user">{el.user}</div>
                                <div className="date">{el.date}</div>
                            </div>
                        </div>
                        <div
                            className="question"
                            dangerouslySetInnerHTML={{ __html: el.content }}
                        ></div>
                        {el.answer !== "" ? (
                            <div className="answer">{el.answer}</div>
                        ) : (
                            <div className="not-answer">
                                아직 답변한 내용이 없습니다
                            </div>
                        )}
                    </AskedCard>
                ))}
            </AskedWrapper>
        </>
    );
};

export default AskedHome;
