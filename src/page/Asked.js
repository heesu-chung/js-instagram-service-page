import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdQuestionAnswer, MdOutlineQuestionAnswer } from "react-icons/md";
import ReactQuill from "../components/reactquill/ReactQuill";
import { useSelector, useDispatch } from "react-redux";

import { getAskedList } from "../redux/actions/askedAction";

export const AskedWrapper = styled.div`
    width: 60%;
    margin-top: 20px;
    margin-bottom: 50px;
    @media (max-width: 800px) {
        width: 95%;
    }
`;

export const AskedCard = styled.div`
    width: 100%;
    /* border: 1px solid #ccc; */
    margin: 10px 0;
    padding: 20px 20px;
    font-size: 1rem;
    border-radius: 15px;
    box-shadow: 0 0 15px 0 #eee;
    z-index: 10;

    .info {
        display: inline-flex;

        .user-info {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .icon {
                font-size: 1.3rem;
                margin-right: 10px;
            }
            .answered {
                color: lightblue;
            }
            .waiting {
                color: #c1c2c2;
            }
            .question-user {
                font-weight: 700;
                color: #888;
                font-size: 0.9rem;
                margin-right: 10px;
            }
            .date {
                font-size: 0.8rem;
                color: #bbb;
            }
        }
    }

    .question {
        font-family: "Noto Sans KR", sans-serif;
        margin: 10px 0;
        margin-top: 15px;
        padding-bottom: 10px;
        font-size: 1rem;
        font-weight: 500;
    }
    .answer,
    .not-answer {
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        line-height: 1.5rem;
    }
    .not-answer {
        color: #aaa;
    }

    .likes {
        margin-top: 20px;
        width: 100px;
        padding: 10px 10px;
        border: 1px solid #ccc;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        cursor: pointer;
        transition: 0.5s all ease;
        &:hover {
            background-color: lightpink;
            border: 1px solid white;
        }
        .icon {
            font-size: 1.3rem;
            width: 30px;
            height: 30px;
        }
    }

    .options {
        display: flex;
        flex-direction: row;
        background: #fbf8fb;
        .ripple,
        .write-ripple {
            width: 100%;
            font-family: "Noto Sans KR", sans-serif;
            font-weight: 700;
            font-size: 0.8rem;
            color: #aaa;
            display: flex;
            height: 30px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .ripple {
            font-size: 1rem;
            font-weight: 500;
            border-right: 1px solid #ccc;
            flex-direction: row;
            .ripple-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                .icon {
                    margin-top: 2px;
                    margin-right: 10px;
                }
                .ripples {
                    font-size: 1rem;
                    color: #aaa;
                }
            }
        }
    }

    @media (max-width: 800px) {
        .likes {
            width: 70px;
        }
    }
`;

const AskedBlock = styled.div`
    width: 100%;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .input {
        width: 100%;
        outline: none;
    }
    .btn {
        margin: 15px auto;
        width: 100px;
        height: 30px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 14px;
        transition: 0.3s all ease;
        cursor: pointer;

        &:hover {
            background-color: black;
            color: white;
        }
    }

    @media (max-width: 800px) {
        width: 95%;
        .input {
            width: 95%;
        }
    }
`;

const Asked = () => {
    const [text, setText] = useState("");

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
            <div className="title"> ASKED</div>

            <AskedWrapper>
                <ReactQuill />
                {[...asked].length !== 0 ? (
                    [...asked].map((el, idx) => (
                        <AskedCard key={idx}>
                            <div className="info">
                                <div className="user-info">
                                    {el.answer === "" ? (
                                        <MdOutlineQuestionAnswer className="icon waiting" />
                                    ) : (
                                        <MdQuestionAnswer className="icon answered" />
                                    )}

                                    <div className="question-user">
                                        {el.user}
                                    </div>
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

                            {/* <div className="options">
                                <div className="ripple">
                                    <div className="ripple-container">
                                        <MdOutlineQuestionAnswer className="icon waiting" />
                                        <div className="ripples">0</div>
                                    </div>
                                </div>
                                <div className="write-ripple">댓글 쓰기</div>
                            </div> */}
                        </AskedCard>
                    ))
                ) : (
                    <AskedCard>여러분들의 질문을 기다리고 있어요!</AskedCard>
                )}
            </AskedWrapper>
        </>
    );
};

export default Asked;
