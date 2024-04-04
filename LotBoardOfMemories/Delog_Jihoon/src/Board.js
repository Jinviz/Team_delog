//보드판 로직
import './Board.css';

import React, { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';

function Board() {
    const [gameOver, setGameOver] = useState(false);
    const lucky = Math.floor(Math.random() * 100) + 1; // 1부터 100까지 랜덤한 숫자
    //const navigate = useNavigate();
  
    useEffect(() => {
      // board가 이미 초기화 되었는지 확인
      const isInitialized = document.getElementById("board").childElementCount > 0;
      if (!isInitialized) {
        const board = document.getElementById("board");
        for (let i = 1; i <= 100; i++) {
          const square = document.createElement("div");
          square.classList.add("square");
          square.innerText = i; // 각 판에 번호 부여
          square.setAttribute("id", `square-${i}`); // 각 판에 고유 ID 부여
          square.onclick = () => handleSquareClick(i, square);
          board.appendChild(square);
        }
      }
    }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트가 마운트될 때만 실행
    // 위와 같은 형태를 react에서 쓰는가? 저렇게 JS로 구현 된 걸 가져와서 사용하는 방식을? => 찾아보기
    // 한 번에 div를 100개를 만드는 것이 아니라, 하나의 div를 만들어서 재사용성을 높이는 방식을 좀 더 선호하는 듯 하다. 
    // div를 따로 만들고, 입맛에 맞게 바꿔가면 된다. 위와 같은 경우는, div를 100번 호출 하면 되겠지? 이중 배열을 쓰던, 10x10 grid를 쓰던..
    const handleSquareClick = (number, square) => {
        if (gameOver || square.classList.contains('clicked')) return; // 게임이 끝났거나 이미 클릭된 square라면 클릭 이벤트 무시
      
        square.classList.add('clicked'); // 클릭된 square에 'clicked' 클래스 추가
      
        if (number === lucky) {
          alert(`당첨번호 ${number}!!. 축하드려요 ^^.`);
          setGameOver(true);
          document.querySelectorAll('.square').forEach(sq => {
            sq.style.backgroundColor = "white";
          });
        } else {
          alert(`꽝이에요 :(`);
        }
      };
  
    return (
      <div id="board" className={gameOver ? "game-over" : ""}>
      </div>
    );
  }


export default Board;