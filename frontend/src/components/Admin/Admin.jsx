import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPostsThunk } from "../../store/post";

import "./Admin.css";

function Admin() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);

  return (
    <section className="postSection">
      <h1>Messages</h1>
      {posts?.map(({ id, firstname, lastname, email, message, createdAt }) => (
        <ul className="postInfo" key={id}>
          <li>
            <div className="postName">
              <h2>
                {lastname}, {firstname}
              </h2>
              <button>X</button>
            </div>
            <div className="postDateTimeContainer">
              <p>{new Date(createdAt).toLocaleDateString("en-US")}</p>
              <p>{new Date(createdAt).toLocaleTimeString()}</p>
            </div>
            <p>{message}</p>
            <p>{email}</p>
          </li>
        </ul>
      ))}
    </section>
  );
}

export default Admin;
