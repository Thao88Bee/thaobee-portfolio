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
      {posts?.map(({ id, firstname, lastname, email, message }) => (
        <ul className="postList" key={id}>
          <li>
            <div className="postInfo">
              <h2>
                {lastname}, {firstname}
              </h2>
              <button>X</button>
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
