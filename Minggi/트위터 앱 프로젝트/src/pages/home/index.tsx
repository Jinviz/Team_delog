import { FiImage } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string; // ?를 넣는 것은 선택할 수 있도록 옵션을 추가하는 방법
  likes?: string[];
  likeCount?: number;
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "내용입니다.",
    createdAt: "2024-05-09",
    uid: "123123",
  },
];

export default function HomePage() {
  const handleFileUpload = () => {};

  const handleDelete = () => {};

  return (
    <div className="home">
      <div className="home__title"></div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab">Follwing</div>
      </div>
      {/* Post Form */}
      <form className="post-form">
        <textarea
          className="post-from__textarea"
          required
          name="content"
          id="content"
          placeholder="What is happening?"
        />
        <div className="post-form__submit-area">
          <label htmlFor="file-input" className="post-form__file">
            <FiImage className="post-form__file-icon" />
          </label>
          <input
            type="file"
            name="file-input"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <input
            type="submit"
            value={"Tweet"}
            className="post-form__submit-btn"
          />
        </div>
      </form>
      {/* Tweet posts */}
      <div className="post">
        {posts?.map((post) => (
          <div className="post__box" key={post?.id}>
            <Link to={`/post/${post?.id}`}>
              <div className="post__box-profile">
                <div className="post__flex">
                  {post?.profileUrl ? (
                    <img
                      src={post?.profileUrl}
                      alt="profile" // 보여줄 이미지가 없을 때 이미지를 대체할 텍스트 명
                      className="post__box-profile-img"
                    />
                  ) : (
                    <FaUserCircle className="post__box-profile-icon" />
                  )}
                  <div className="post__email">{post?.email}</div>
                  <div className="post__createdAt">{post?.createdAt}</div>
                </div>
                <div className="post__box-content">{post?.content}</div>
              </div>
            </Link>
            <div className="post__box-footer">
              {/* post.uid === user.uid 일 때 */}
              <>
                <button
                  type="button"
                  className="post__delete"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button type="button" className="post__edit">
                  <Link to={`/posts/edit/${post?.id}`}></Link>
                  Edit
                </button>
                <button type="button" className="post__likes">
                  <AiFillHeart />
                  {post?.likeCount || 0}
                </button>
                <button type="button" className="post__comments">
                  <FaRegComment />
                  {post?.comments?.length || 0}
                </button>
              </>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
