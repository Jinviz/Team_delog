import { useEffect, useState } from "react";
import { app, db } from "firebaseAPP";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // 현재 firbase의 사용자 로그인 여부 체크
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./components/Router";
import Loader from "components/Loader";

function App() {
  const auth = getAuth(app); // getAuth는 app을 넣어야 작동함.
  // auth를 체크하기 전에 (initialize 전)에는 loader를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);
  // auth의 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  // auth의 관찰자 역할 (state 업데이트를 위한 것임)
  useEffect(() => {
    // 현재 로그인한 사용자 가져오기
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
}

export default App;
