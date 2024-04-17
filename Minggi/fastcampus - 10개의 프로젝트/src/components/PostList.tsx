import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList(
  { hasNavigation = true } /* profile 페이지에서 보이면 안돼서 추가 */
) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
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
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}

      <div className="post__list">
        {" "}
        {/* 게시글 목록 */}
        {/* 게시글의 개수를 배열로 저장 후 mapping을 한다 */}
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            {" "}
            {/* 게시글 박스 */}
            <Link to={`/posts/${index}`}>
              {" "}
              {/* 게시글의 id값에 따라 해당 게시글로 이동 */}
              <div className="post__profile-box">
                {" "}
                {/* 게시글의 프로필 박스 */}
                <div className="post__profile" />{" "}
                {/* 게시글 등록자의 프로필 사진 공간 */}
                <div className="post__author-name">채민기</div>{" "}
                {/* 등록자의 이름 */}
                <div className="post__date">2024.04.10</div> {/* 등록한 날짜 */}
              </div>
              <div className="post__title">게시글 {index}</div>{" "}
              {/* 게시글의 제목 */}
              <div className="post__text">text testing</div>{" "}
              {/* 게시글의 내용 */}
              <div className="post__utils-box">
                {" "}
                {/* 게시글 수정/삭제 박스 */}
                <div className="post__delete">삭제</div> {/* 게시글 삭제 */}
                <div className="post__edit">수정</div> {/* 게시글 수정 */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
