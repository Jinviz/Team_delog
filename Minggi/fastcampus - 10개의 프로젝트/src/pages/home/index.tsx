import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <div>
            <header>
                <div>
                    <Link to = "/posts/new">글쓰기</Link>
                    <Link to = "/posts">게시글</Link>
                    <Link to = "/profile">프로필</Link>
                </div>
            </header>
            <div className='post__navigation'>{/* 블로그 탭(메뉴) */}
            <div className='post__navigation--active'>전체</div> {/* class를 클릭을 했을 때 active한 클래스 */}
            <div>나의 글</div>
                </div> 
            <div className="post__list"> {/* 게시글 목록 */}
                {/* 게시글의 개수를 배열로 저장 후 mapping을 한다 */}
                {[...Array(10)].map((e,index)=>(
                    <div key={index} className="post__box"> {/* 게시글 박스 */}
                        <Link to={`/posts/${index}`}> {/* 게시글의 id값에 따라 해당 게시글로 이동 */}
                            <div className='post__profile-box'> {/* 게시글의 프로필 박스 */}
                                <div className="post__profile"/> {/* 게시글 등록자의 프로필 사진 공간 */}
                                <div className='post__author-name'>채민기</div> {/* 등록자의 이름 */}
                                <div className='post__date'>2024.04.10</div> {/* 등록한 날짜 */}   
                            </div>
                        <div className='post__title'>게시글 {index}</div> {/* 게시글의 제목 */}
                        <div className='post__text'>text testing</div>  {/* 게시글의 내용 */}
                        <div className='post__utils-box'> {/* 게시글 수정/삭제 박스 */}
                            <div className='post__delete'>삭제</div> {/* 게시글 삭제 */}
                            <div className='post__edit'>수정</div> {/* 게시글 수정 */}
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            <footer>
            <Link to = "/posts/new">글쓰기</Link>
            <Link to = "/posts">게시글</Link>
            <Link to = "/profile">프로필</Link>
            </footer>
        </div>
    );
}