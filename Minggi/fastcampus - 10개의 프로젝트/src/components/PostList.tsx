import AuthContext from "context/AuthContext";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "firebaseAPP";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export interface PostProps {
  id?: string; // ?를 붙인 이유는 PostDetail에서 id: docSnap.id의 type error를 방지하기 위함
  title: string;
  email: string;
  summary: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  uid: string;
}

export default function PostList(
  { hasNavigation = true } /* profile 페이지에서 보이면 안돼서 추가 */
) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [posts, setPosts] = useState<PostProps[]>([]); // 화면에 posts를 렌더링
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    const datas = await getDocs(collection(db, "posts"));
    setPosts([]); // 초기화하는 코드
    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?");

    // 확인을 한 경우
    if (confirm && id) {
      await deleteDoc(doc(db, "posts", id));

      toast.success("게시글을 삭제했습니다.");
      getPosts(); // 변경된 post 리스트를 다시 가져옴
    }
  };

  // 페이지가 새로 mount될 때 마다 모든 posts를 friestore를 통해 가져오게 하는 방법
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {hasNavigation /* profile 페이지에서 보이면 안되는 내용이기에, 조작할 수 있도록 props를 넘겨줄 수 있도록 작업을 함 */ && (
        <div className="post__navigation">
          {/* 블로그 탭(메뉴) */}
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>{" "}
          {/* class를 클릭을 했을 때 active한 클래스 */}
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}

      <div className="post__list">
        {" "}
        {/* 게시글 목록 */}
        {/* 게시글의 개수를 배열로 저장 후 mapping을 한다 */}
        {posts?.length > 0 ? (
          posts?.map((post, index) => (
            <div key={post?.id} className="post__box">
              {" "}
              {/* 게시글 박스 */}
              <Link to={`/posts/${post?.id}`}>
                {" "}
                {/* 게시글의 id값에 따라 해당 게시글로 이동 */}
                <div className="post__profile-box">
                  {" "}
                  {/* 게시글의 프로필 박스 */}
                  <div className="post__profile" />{" "}
                  {/* 게시글 등록자의 프로필 사진 공간 */}
                  <div className="post__author-name">{post?.email}</div>{" "}
                  {/* 등록자의 이름 */}
                  <div className="post__date">{post?.createdAt}</div>{" "}
                  {/* 등록한 날짜 */}
                </div>
                <div className="post__title"> {post?.title}</div>{" "}
                {/* 게시글의 제목 */}
                <div className="post__text">{post?.summary}</div>{" "}
                {/* 게시글의 내용 */}
              </Link>
              {post?.email === user?.email && (
                <div className="post__utils-box">
                  {" "}
                  {/* 게시글 수정/삭제 박스 */}
                  <div
                    className="post__delete"
                    role="presentation"
                    onClick={() => handleDelete(post.id as string)}
                  >
                    삭제
                  </div>{" "}
                  {/* 게시글 삭제 */}
                  <Link to={`/posts/edit/${post?.id}`} className="post__edit">
                    {" "}
                    수정
                  </Link>
                  {/* 게시글 수정 */}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="post__no-post">게시글이 없습니다.</div>
        )}
      </div>
    </>
  );
}
