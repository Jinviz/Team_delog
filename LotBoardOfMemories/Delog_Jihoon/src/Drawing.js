import React, { useState } from 'react';
import './Drawing.css';

function Drawing() {
  // 뽑은 번호들을 저장하는 상태
  const [drawnNumbers, setDrawnNumbers] = useState([]);

  // 랜덤 뽑기 함수
  const handleDraw = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1; // 1부터 100까지 랜덤 숫자
    // 이미 뽑힌 번호라면 다시 뽑기
    if (!drawnNumbers.includes(newNumber)) {
      setDrawnNumbers(prev => [...prev, newNumber]);
    } else {
      handleDraw();
    }
  };

  // 뽑았던 번호를 되돌리는 함수
  const handleUndo = () => {
    setDrawnNumbers(drawnNumbers.slice(0, -1)); // 마지막으로 뽑힌 번호를 제거
  };

  return (
    <div>
      <div class="center-container">
      <button id = 'randombutton' onClick={handleDraw}>랜덤 뽑기</button>
      <button id = 'undobutton' onClick={handleUndo} disabled={drawnNumbers.length === 0}>되돌리기</button>
      </div>
      <div  class="center-container"><h2>뽑힌 번호: {drawnNumbers.join(', ')}</h2></div>
    </div>
  );
}

export default Drawing;