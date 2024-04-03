//! 뽑기, 되돌리기, 당첨 등수, 뽑은 기록 필요 -> 당첨 등수, 뽑은 기록 미구현
//! 라우팅 기능 필요 -> 미구현
//! 보드의 전체 틀, 뽑기 판, 결과판 컴포넌트화 필요 -> 미구현(10*10 뽑기판 전체 틀, 각각 한 개의 뽑기 판 컴포넌트, 결과판)
//? 선택된 번호에 대해 중복 선택 불가능하게 하기 -> 구현 완료
//? 뽑기, 되돌리기에서 useState 사용해야함 -> 구현은 완료 하였으나, 되돌리기 버튼 이해가 필요.
//? 랜덤으로 뽑기 기능, 뽑은 번호는 색 변경 구현 필요 ->  구현 완료
//? 배열마다 각각의 번호가 필요 (key값? -> 당첨 등수를 구현해야하기 때문) -> 구현 완료
//* ReactHooks중 useEffect, useState, Router, useNavigate를 사용해야한다.

import React, { useState, useEffect, useRef } from "react";

function Board() {
  // //* 당첨 등수를 뽑기 위한 배열
  // useEffect(() => {
  //   //! 왜 2번 실행되는지 파악해야함 -> useEffect의 호출 시기를 파악하면 도움이 될 것
  //   let winArr = [];
  //   for (let i = 0; i < 5; i++) {
  //     winArr[i] = Math.floor(Math.random() * 100);
  //   }
  //   console.log(winArr);
  // }, []);

  //* useState형의 board 이중 배열 선언, setBoard를 통해 배열 내의 값 변경
  //? 지훈이가 작성한 코드와 내가 작성한 코드가 하나의 선택지로 갈린 것이 아닌가?
  //? 내껀 좌표 형식으로 row, col 할당, 지훈이껀 아예 보드판을 만들 때 10*10 그리드 자체로 한 번에 만든 것 같다.
  //? 내껀 캔버스 없이 그려 나간 느낌, 지훈이껀 캔버스 있이 그려 나간 느낌
  const [board, setBoard] = useState(() =>
    Array(10)
      .fill(0)
      .map(() => Array(10).fill(false))
  );

  //* 가변 상태를 유지할 수 있도록 도와주는 useRef를 사용
  const prevBoards = useRef([]);

  //* 보드판을 클릭할 시 실행되는 함수
  const handleClick = (row, col) => {
    if (!board[row][col]) {
      console.log(`클릭한 네모칸: (${row}, ${col})`);

      //* 이중 맵(배열)을 통해 선택된 보드의 row와 col 값과, 그에 맞는 Index 값이 맞을 경우 board의 false를 true로 변경
      const newBoard = board.map((rowArr, rowIndex) =>
        rowArr.map((value, colIndex) =>
          rowIndex === row && colIndex === col ? true : value
        )
      );

      //* 선택된 위치에 대한 고유 번호 구별
      const boardNumber = row * board[0].length + col + 1;
      console.log(boardNumber);

      setBoard(newBoard);

      //* 되돌리기 버튼을 사용하기 위한 코드
      prevBoards.current.push(JSON.parse(JSON.stringify(board))); //* useRef 객체의 현재 값에 접근 = setBoard를 통해 업데이트 되는 board의 배열을 받아오기 위함
    }
  };

  //* 뽑기 버튼을 누를 시 실행되는 함수
  const random = () => {
    //* 랜덤으로 행과 열을 선택
    let randomRow, randomCol;
    let isAlreadySelected = true;

    while (isAlreadySelected) {
      randomRow = Math.floor(Math.random() * board.length);
      randomCol = Math.floor(Math.random() * board[0].length);
      isAlreadySelected = board[randomRow][randomCol];
    }

    console.log(`랜덤으로 선택된 네모칸: (${randomRow}, ${randomCol})`);

    //* 선택된 위치에 대한 고유 번호 구별
    const boardNumber = randomRow * board[0].length + randomCol + 1;

    console.log(boardNumber);

    //* 이중 맵(배열)을 통해 선택된 보드의 row와 col 값과, 그에 맞는 Index 값이 맞을 경우 board의 false를 true로 변경
    const newBoard = board.map((rowArr, rowIndex) =>
      rowArr.map((value, colIndex) =>
        rowIndex === randomRow && colIndex === randomCol ? true : value
      )
    );
    setBoard(newBoard); //* 변경된 값을 setBoard를 통해 board에 전달

    //* 되돌리기 버튼을 사용하기 위한 코드
    //! 아직 완벽하게 이해 못함
    prevBoards.current.push(JSON.parse(JSON.stringify(board))); //* 이전 상태 저장
  };

  //* 되돌리기 버튼을 누를 시 실행되는 함수
  const back = () => {
    //! 아직 완벽하게 이해 못함
    if (prevBoards.current.length > 0) {
      //* 이전 상태 배열에서 가장 최근의 상태를 꺼내어 적용
      const prevBoard = prevBoards.current.pop(); //! 아직 완벽하게 이해 못함
      setBoard(prevBoard);
    }
  };

  return (
    //* 보드의 전체적인 틀 CSS
    <div className="Board-container">
      {board.map((row, rowIndex) => (
        //* board의 map을 통해서 row, rowIndex 값 가져오기
        <div key={rowIndex}>
          {row.map((col, colIndex) => {
            //* row의 map을 통해서 col, colIndex 값 가져오기
            //* -> 이중 배열 구조로 인해 board의 map을 가져와서 row를 가져오고, 가져온 row를 통해 col을 가져온다.
            const uniqueNumber = rowIndex * board[0].length + colIndex + 1; //* 변경되는 보드판의 고유 번호 식별용
            return (
              <span
                key={colIndex} //* span를 유일하게 구별하기 위한 rowIndex 값을 key로 설정
                onClick={() => handleClick(rowIndex, colIndex)} //* 보드판을 클릭 했을 때 rowIndex와 colIndex값을 handleCLick 함수로 전달
                className={col ? "Board-Selected" : "Board"} //* col이 true면 className을 "Board-Selected"로 변경, false면 "Board"로 변경
              >
                {uniqueNumber}
              </span>
            );
          })}
        </div>
      ))}
      <div className="Button">
        <button className="Button-Style" onClick={random}>
          랜덤 뽑기
        </button>
        <span className="Button-space"></span>
        <button className="Button-Style" onClick={back}>
          되돌리기
        </button>
      </div>
    </div>
  );
}

export default Board;
