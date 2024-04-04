//라우팅을 위한 컴포넌트 관리 파일

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Board from './Board';
import ResultPage from './ResultPage';

function Routing() {
  return (
    <Routing>
      <Routes>
        <Route path="/" element={<Board />} /> 
        <Route path="/win" element={<ResultPage />} />
      </Routes>
    </Routing>
  );
}

export default Routing;