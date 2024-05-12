import { app } from "firebaseAPP";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
import { useContext } from "react";

// firebase에서 제공하는 signOut을 통해 만든 로그아웃 함수
const onSignOut = async () => {
  try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.");
  } catch (error: any) {
    toast.error(error?.code);
  }
};

export default function Profile() {
  const auth = getAuth(app); // auth에 currentuser에 접근이 가능함 (이메일, 디스플레이 정보 등)
  const { user } = useContext(AuthContext);

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          {/* {auth?.currentUser?.email}, {auth?.currentUser?.displayName || "사용자"}는 
          useContext에 있는 user의 currentUser 값을 가져와서 사용하지 않음*/}
          <div className="profile__email">{user?.email}</div>
          <div className="profile__name">{user?.displayName || "사용자"}</div>
        </div>
      </div>
      <div role="presentation" className="profile__logout" onClick={onSignOut}>
        로그아웃
      </div>
    </div>
  );
}
