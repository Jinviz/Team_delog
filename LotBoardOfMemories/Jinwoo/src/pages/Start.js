import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Start = () => {
    const navigate = useNavigate();


    return (
        <StartContainer>
            <AwardWrapper>
            <Image src='./image1.png'/><br/>
            ★ 1등: 테슬라 x 1    ★<br/>
            ★ 2등: 맥북프로 x 2  ★<br/>
            ★ 3등: 아이패드 x 4  ★<br/>
            ★ 4등: 문상5만원 x 10★<br/>
            ★ 5등: 추파춥스 x 30 ★<br/>
            ★ 꽝: Nothing       ★<br/> 
            </AwardWrapper>
            <StartButton onClick={() => navigate('main')}>Start!</StartButton>
        </StartContainer>
    )
}
export default Start

const StartContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 3;
`;

const AwardWrapper = styled.div`
    position: relative;
    left: 43%;
    font-size: 28px;
    width: 600px;
    text-align: left;
    margin: 80px 0;    
`; 

const StartButton = styled.button`
    width: 15%;    
    height: 80px;
    background-color: #7f7f7f;
    font-size: 24px;
    border-radius: 8px;
    border-line: 1px solid #ffffff;
`;

const Image = styled.img`
    left: 3vw;
    top: 10vh;
    width: 25vw;
    transform: translateX(-25%) scale(1.5);    
    padding-bottom: 60px;
`;
