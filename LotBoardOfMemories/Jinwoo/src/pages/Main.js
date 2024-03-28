import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import History from '../components/History'
import Board from '../components/Board'
    
const Main = () => {
    const [prize, setPrize] = useState([['공란'],[],[],[],[],[],[]]) 
    const [drawingNum, setDrawingNum] = useState(100)
    const [isClicked, setIsClicked] = useState(Array(101).fill(true)) // 클릭된 버튼 판단
    const [choiced, setChoiced] = useState([]) // 뽑힌 번호

    useEffect(() => {
        RandomPrizeNumber();
    }, [])
    
    const RandomPrizeNumber = (drawingNum)=>{
        let numbers = Array.from({ length: 100 }, (_, i) => i + 1);

        // 배열 섞기 (Fisher-Yates shuffle 알고리즘)
        for (let i = numbers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // ES6 구조 분해 할당을 사용한 요소 교환
        }
        // 섞인 배열에서 앞의 46개 숫자 선택
        const selectedNumbers = numbers.slice(0, 46);

        let firstPrize = selectedNumbers.slice(0,1);
        let secondPrize = selectedNumbers.slice(1,3);
        let thirdPrize = selectedNumbers.slice(3,7);
        let fourthPrize = selectedNumbers.slice(7,17);
        let fifthPrize = selectedNumbers.slice(17,47);
    
        setPrize([
            [],firstPrize,secondPrize,thirdPrize,fourthPrize,fifthPrize]);
    }

    const handleClickDrawing = (i) => {
        let newIsClicked = isClicked.slice();
        newIsClicked[i] = false;    // 비활성화
        setIsClicked(newIsClicked); 
        setChoiced([...choiced, i]);

        // 당첨처리
        if(prize[1].includes(i)){
            alert("축하합니다 1등입니다!!")
        }
        else if(prize[2].includes(i)){
            alert("2등입니다~!")
        }
        else if(prize[3].includes(i)){
            alert("3등입니다!")
        }
        else if(prize[4].includes(i)){
            alert("4등입니다!")
        }
        else if(prize[5].includes(i)){
            alert("5등입니다")
        }
        else{
            alert("꽝입니다")
        }
    }


    const RestoreDrawing = () => {
        //  마지막에 고른 번호 삭제
        let newChoiced = choiced.slice();
        let previous = newChoiced[newChoiced.length - 1];
        newChoiced.pop();
        setChoiced(newChoiced);
        //  마지막에 선택한 뽑기 활성화
        let newIsClicked = isClicked.slice();
        newIsClicked[previous] = true;    // 활성화
        setIsClicked(newIsClicked);
    }

    const RandomChoice = () =>{
        let newChoiced = choiced.slice();
        let newIsClicked = isClicked.slice();
        let randomChoice;

        // 현재 뽑힌 뽑기는 제외하고 그 중에서 랜덤뽑기
        do {
            randomChoice = Math.ceil(Math.random() * drawingNum);
        } while (newChoiced.includes(randomChoice));
        newChoiced.push(randomChoice);


        newIsClicked[randomChoice] = false;
        setChoiced(newChoiced);
        setIsClicked(newIsClicked);
    }
        
    
    
    return (
        <Container>
            <MainWrapper>
                <Image src="./image2.png"/>
                <Board onClick={handleClickDrawing} clicked={isClicked}/>
                <History choiced={choiced} prize={prize}/>
            </MainWrapper>
            <ButtonWrapper>
                <RandomButton onClick={()=>RandomChoice()}>
                    랜덤뽑기
                </RandomButton>
                <RestoreButton onClick={()=>RestoreDrawing()}>
                    되돌리기
                </RestoreButton>
            </ButtonWrapper>
        </Container>
    )
}

export default Main

const Container = styled.div`
	display: block;
	position: relative;
	height: auto;
    min-height: 100vh;
    text-align: center;
	z-index: 1;
`;

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 40px;
`;

const RandomButton = styled.button`
    width: 10%;    
    height: 50px;
    background-color: #7f7f7f;
    font-size: 24px;
    border-radius: 8px;
    border-line: 1px solid #ffffff;
    margin: 0 16px;
`;
    
    const RestoreButton = styled.button`
    width: 10%;    
    height: 50px;
    background-color: #7f7f7f;
    font-size: 24px;
    border-radius: 8px;
    border-line: 1px solid #ffffff;
    margin: 0 16px;
`;

const Image = styled.img`
    position: absolute; 
    left: 3vw;
    top: 10vh;
    width: 25vw;
`;
