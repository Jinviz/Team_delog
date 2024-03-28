import React from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Start from "./pages/Start";
import Main from "./pages/Main";
import Header from "./pages/Header";

function App() {
  return (
    <Container>
		  <Header/>

      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="main" element={<Main/>}/>
      </Routes>

    </Container>
  )
}
export default App;

const Container = styled.div`
	display: block;
	position: relative;
	height: auto;
  min-height: 100vh;
	z-index: 1;
`;


