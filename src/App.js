import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./components/global/Footer";
import Home from "./page/Home";
import WallPaper from "./page/WallPaper";
import Navigation from "./components/global/Navigation";
import Asked from "./page/Asked";
import Archive from "./page/Archive";
import styled from "styled-components";
import About from "./page/About";
import Admin from "./page/Admin";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import ArchiveDetail from "./page/ArchiveDetail";
import ScrollTop from "./components/global/ScrollTop";
import { getUserInfo } from "./redux/actions/userAction";
import WallPaperDetail from "./page/WallPaperDetail";

const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    overflow-x: hidden;

    @media (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 800px) {
        width: 100%;
        margin: 0 auto;
    }

    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
    }
`;

function App() {
    const [isAuth, setIsAuth] = useState(false);

    let { user } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const userInfo = async () => {
            await dispatch(getUserInfo());
        };
        userInfo();
    }, [dispatch]);
    return (
        <Wrapper>
            <BrowserRouter>
                <ScrollTop />
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wall-paper/" element={<WallPaper />} />
                    <Route
                        path="/wall-paper/:id"
                        element={<WallPaperDetail />}
                    />
                    <Route path="/asked/*" element={<Asked />} />
                    <Route path="/archive/" element={<Archive />} />
                    <Route path="archive/:id" element={<ArchiveDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/login"
                        element={<Login setIsAuth={setIsAuth} />}
                    />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </Wrapper>
    );
}

export default App;
