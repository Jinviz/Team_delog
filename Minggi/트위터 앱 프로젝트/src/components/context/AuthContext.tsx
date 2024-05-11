// ReactNode는 jsx내에서 사용할 수 있는 모든 요소의 타입을 의미
// createContext는 리액트 패키지에서 createContext라는 함수를 불러와서 사용
import { ReactNode, createContext, useState, useEffect } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext({
  user: null as User | null,
});

// context의 변화를 알려주는 기능
/* 
App.tsx에 있는 useEffect로직을 적용을 하려 하는데
그 이유는 Authcontext에서 User 값을 가져오기 위해 User를 호출 하면 
onAuthStateChanged 변경 되는지 안되는지 확인을 해서 현재 User 값을 가져오기 위함
*/
export const AuthContextProvider = ({ children }: AuthProps) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // auth의 관찰자 역할 (state 업데이트를 위한 것임)
  useEffect(() => {
    // 현재 로그인한 사용자 가져오기
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // currentUser를 바로 저장하는 방법
        setCurrentUser(user);
      } else {
        setCurrentUser(user);
      }
    });
  }, [auth]);

  // Provider은 value 값을 가지고 있다.
  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
