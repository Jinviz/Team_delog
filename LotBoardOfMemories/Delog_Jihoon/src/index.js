//10x10 뽑기판 만들기
//!! 되돌리기, 라우팅 필요(Drawing, Routing 컴포넌트 활용)
//?? 되돌리기, 랜덤 뽑기 기능은 했는데 왜 board.js랑 연동이 안될까? 연동 시켜야 함
//?? 라우팅 왜 안되는지 알아볼 것. BrowserRouter 자식으로 있어야 한다고 해서 넣었는데 코드 구조가 잘못 된 듯 하다.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Board from './Board';
import Drawing from './Drawing';
import Routing from './Routing';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Board></Board>  
      <Drawing></Drawing>
      {/*<Routing></Routing> 이거 왜 안되는겨*/} 
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
