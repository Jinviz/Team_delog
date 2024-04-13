/* 컴포넌트로 작업을 하는 이유는 Post를 가져오는 작업 및 어떤 포스트인지 구별하는 작업을 모두 이 페이지에서 해야 하기 때문이다. 

제목, 프로필, 상세 내용, 댓글, 카테고리가 있는 컴포넌트

*/
export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">post title text</div>
          <div className="post__profile-box">
            {" "}
            {/* 게시글의 프로필 박스 */}
            <div className="post__profile" />{" "}
            {/* 게시글 등록자의 프로필 사진 공간 */}
            <div className="post__author-name">채민기</div>{" "}
            {/* 등록자의 이름 */}
            <div className="post__date">2024.04.10</div> {/* 등록한 날짜 */}
          </div>
          <div className="post__utils-box">
            {" "}
            {/* 게시글 수정/삭제 박스 */}
            <div className="post__delete">삭제</div> {/* 게시글 삭제 */}
            <div className="post__edit">수정</div> {/* 게시글 수정 */}
          </div>
          <div className="post__text">text testing {/* 게시글의 내용 */}</div>
        </div>
      </div>
    </>
  );
}
