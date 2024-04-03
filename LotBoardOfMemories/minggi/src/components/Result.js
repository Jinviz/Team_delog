import React, { useState } from "react";
import { Board } from "./Board";

function Result() {
  const [board, setBoard] = useState(/* 초기값 설정 */);

  return (
    <div>
      <Board board={board} setBoard={setBoard} />
      {/* 다른 JSX 코드 */}
    </div>
  );
}

export default Result;
