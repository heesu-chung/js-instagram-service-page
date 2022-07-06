import React, { useState } from "react";

import styled from "styled-components";
import { firestore, storage } from "../config/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";

import { getAuthInfo } from "../redux/actions/authActions";

const Wrapper = styled.div`
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 95%;
        margin: 50px auto;

        .title {
            font-size: 1.3rem;
            margin-bottom: 20px;
        }
        input {
            margin-bottom: 10px;
        }
    }
`;

const Btn = styled.button`
    width: 100px;
    height: 30px;
`;

const Admin = () => {
    const [wallpaper, setWallpaper] = useState("");
    const [archive, setArchive] = useState("");

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const idChange = (e) => {
        setId(e.target.value);
    };
    const pwChange = (e) => {
        setPw(e.target.value);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(getAuthInfo(id, pw));
    };

    const uploadArchive = async (event) => {
        event.preventDefault();
        if (archive === null) return;

        storage
            .ref(`/documents/archive/${archive.name}`)
            .put(archive)
            .on("state_changed", alert("success upload archive"), alert);

        let fileURL = "";
        fileURL = await storage
            .ref(`/documents/archive/${archive.name}`)
            .getDownloadURL();

        await firestore.collection("archive").add({
            fileName: archive.name,
            fileURL: fileURL,
            dateSort: Number(new Date()),
            date: new Date().toLocaleString(),
            name: archive.name.split(".")[0],
            reply: [],
            view: 0,
            ipArr: [],
        });
    };
    const uploadWallPaper = async (event) => {
        event.preventDefault();
        if (wallpaper === null) return;
        storage
            .ref(`/documents/wall-paper/${wallpaper.name}`)
            .put(wallpaper)
            .on("state_changed", alert("success upload wallpaper"), alert);

        let fileURL = "";
        fileURL = await storage
            .ref(`/documents/wall-paper/${wallpaper.name}`)
            .getDownloadURL();

        await firestore.collection("wallpaper").add({
            fileName: wallpaper.name,
            fileURL: fileURL,
            dateSort: Number(new Date()),
            date: new Date().toLocaleString(),
            name: wallpaper.name.split(".")[0],
            reply: [],
            view: 0,
            ipArr: [],
        });
    };

    return (
        <Wrapper>
            <div className="warning"> 대체 무슨 볼일이 있으신거죠??</div>
            {Number(auth.tier) === 5 ? (
                <>
                    <div className="container wall-paper">
                        <div className="title">Wall Paper Upload</div>
                        <input
                            type="file"
                            onChange={(e) => {
                                setWallpaper(e.target.files[0]);
                            }}
                        />
                        <button onClick={uploadWallPaper}>
                            배경화면 업로드
                        </button>
                    </div>
                    <div className="container archive">
                        <div className="title">Archive GIF Upload</div>
                        <input
                            type="file"
                            onChange={(e) => {
                                setArchive(e.target.files[0]);
                            }}
                        />
                        <button onClick={uploadArchive}>GIF 업로드</button>
                    </div>
                </>
            ) : (
                <>
                    id
                    <input
                        className="id"
                        onChange={idChange}
                        value={id}
                    ></input>
                    pw
                    <input type="password" onChange={pwChange} value={pw} />
                    <Btn className="submit" onClick={onSubmit}>
                        로그인
                    </Btn>
                </>
            )}
        </Wrapper>
    );
};

export default Admin;
