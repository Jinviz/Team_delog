import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
    hasNavigation?: boolean;
} //PostList 컴포넌트가 받을 수 있는 props 타입 정의

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true}: PostListProps) {
    const [activeTab, setActiveTab] = useState<TabType>("all");
    //hasNavigation의 기본값은 true, 별도의 prop이 제공되지 않으면 true다.
    return (
        <> 
        {hasNavigation && ( //hasNavigation이 true일 때만 이 식이 렌더링
        // 왼쪽 피연산자(hasNavigation 여기서)의 값이 참 같은 값(truthy)일 때 
        //오른쪽 피연산자(여기서는 (...))의 값을 반환
        <div className="post__navigation">
        <div
          role="presentation"
          onClick={() => setActiveTab("all")}
          className={activeTab === "all" ? "post__navigation--active" : ""}
        >
          전체
        </div>
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
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post__profile-box">
                                <div className="post__profile"/>
                                <div className="post__author-name">패스트캠퍼스</div>
                                <div className="post__date">2024.04.18 목요일</div>
                            </div>
                            <div className="post__title">게시글 {index}</div>
                            <div className="post__text">
                                하이
                            </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}