import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/image/plant.gif";
import titleImg from "../assets/image/title.png";
import thinkingImg from "../assets/image/theThinker.gif";

const Wrapper = styled.div`
    width: 60%;
    display: flex;
    margin-bottom: 50px;
    flex-direction: column;
    font-family: "Noto Sans KR", sans-serif;
    justify-content: center;
    img {
        width: 50%;
        margin: 0 auto;
    }
    .title {
        width: 40%;
        margin-bottom: 50px;
    }
    .content {
        width: 100%;
        font-size: 1.3rem;
        padding: 8px;
        font-weight: 300;
        letter-spacing: 1px;
        word-spacing: 3px;
        margin-bottom: 10px;
        color: #777;
    }
    @media (max-width: 800px) {
        width: 95%;
        img {
            width: 100%;
        }
        .content {
            padding: 5px;
            font-size: 0.8rem;
            word-spacing: 1px;
            letter-spacing: 0;
            text-align: center;
        }
    }
`;

const About = () => {
    return (
        <Wrapper>
            <img src={aboutImg} alt="" />
            <img src={titleImg} alt="" className="title" />
            <div className="content">생각의 모양은</div>
            <div className="content">
                생각하는 우리의 모습을 표현하고자 합니다
            </div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content">
                우리는 항상 스스로에게 생각할 거리를 던지고,
            </div>
            <div className="content">그 생각은 꼬리에 꼬리를 물어서,</div>
            <div className="content">마침내, 어떤 생각에 다다릅니다</div>
            <div className="content"></div>

            <div className="content">자신에겐 당연했던 그 생각의 꼬리들이</div>
            <div className="content">
                타인과 다른 것은 우리가 누구인지를 말해주고
            </div>
            <div className="content"></div>
            <div className="content">누군가가 그것을 함께 공감해준다는 건</div>
            <div className="content">우리도 어딘가 속해있단 것을,</div>
            <div className="content"></div>
            <div className="content">생각을 나눌 수 있다는 것은</div>
            <div className="content">우리에게 또 다른 생각거리를 던져</div>
            <div className="content">
                보다 더 성장할 수 있는 발판이 되어줍니다
            </div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content">생각의 모양은</div>
            <div className="content">그런 우리의 모습을 표현하고자 합니다</div>
            <img src={thinkingImg} alt="" />
        </Wrapper>
    );
};

export default About;
