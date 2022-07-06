import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { firestore } from "../../config/firebaseConfig";
import { getAskedList } from "../../redux/actions/askedAction";

const Wrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    width: 100%;

    margin: 0px auto;

    @media (max-width: 1200px) {
        width: 95%;
    }

    @media (max-width: 800px) {
        width: 95%;
        margin: 0 auto;
    }
    input {
        width: 100%;
        margin-top: 50px;
        margin-bottom: 30px;
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid #ccc;
        background: #eeeded;
        &:focus {
            outline: 1px solid #ccc;
        }
    }
    .editor {
        height: 200px;
    }

    .desc {
        text-align: center;
        color: #ccc;
        font-size: 0.8rem;
        margin: 10px 0;
    }
`;

const TextWrapper = styled.textarea`
    width: 100%;
    resize: none;
    border: 2px solid #aaa;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 15px 0 #eee;
`;
const Btn = styled.div`
    display: flex;
    justify-content: center;
    .link,
    .link-disable {
        font-family: "Noto Sans KR", sans-serif;
        color: #666;
        text-decoration: none;
        display: flex;
        justify-content: center;
        letter-spacing: 1px;
        width: 100px;
        border-radius: 25px;
        border: 4px solid #efefef;
        font-size: 14px;
        padding: 10px 20px;
        background-color: #fff;
        margin: 10px 0;
        font-weight: 700;
    }
    .link {
        cursor: pointer;
        transition: 0.3s all ease;
        &:hover {
            background-color: lightblue;
            color: white;
        }
        border: 4px solid lightblue;
    }
    .link-disable {
        color: #ccc;
    }
`;

export const Editor = () => {
    const QuillRef = useRef();
    // set Contents
    const [value, setValue] = useState("");
    const [text, setText] = useState("");
    const { user } = useSelector((state) => state);

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        const desc = text.slice(0, 100);
        const asked = firestore.collection("asked");
        setText("");
        try {
            asked.add({
                date: new Date().toLocaleString(),
                dateSort: Number(new Date()),
                user: "익명",
                content: text,
                answer: "",
                reply: [],
                likes: 0,
                likesUsers: [],
                desc: desc,
                userInfo: user,
            });
        } catch (err) {
            console.log(err.message);
        }

        await dispatch(getAskedList());
    };
    const handleText = (e) => {
        setText(e.target.value);
    };
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    ["link", "image", "video"],
                ],
            },
        }),
        []
    );
    return (
        <Wrapper>
            {/* <Wrapper>
                <ReactQuill
                    className="editor"
                    ref={(element) => {
                        if (element !== null) {
                            QuillRef.current = element;
                        }
                    }}
                    value={text}
                    onChange={setText}
                    modules={modules}
                    theme="snow"
                    placeholder="아무거나 질문해주세요!"
                />
            </Wrapper> */}
            <TextWrapper
                className="text-area"
                value={text}
                onChange={handleText}
                placeholder="여러분의 질문들은 콘텐츠를 만드는 힘이 됩니다! 아무거나 질문해주세요!"
                rows={5}
            />
            <div className="desc">질문은 익명으로 등록됩니다!</div>
            <div className="desc">질문 등록을 하시면 지우실 수 없어요!</div>
            <div className="desc">등록 버튼 누르시기 전에 꼭 확인해주세요!</div>
            <Btn>
                {text !== "" ? (
                    <Link className="link" to={`/asked`} onClick={onSubmit}>
                        등록
                    </Link>
                ) : (
                    <div className="link-disable">등록</div>
                )}
            </Btn>
        </Wrapper>
    );
};

export default Editor;
