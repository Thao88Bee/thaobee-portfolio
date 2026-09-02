import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { createPostThunk, getAllPostsThunk } from "../../store/post";

import "./Contact.css";

function Contact() {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = {};

    if (!firstname.length) {
      errors.firstname = "Please enter your first name";
    }
    if (!lastname.length) {
      errors.lastname = "Please enter your last name";
    }
    if (!email.length) {
      errors.email = "Please enter your email";
    }
    if (!message.length) {
      errors.message = "A message is needed";
    }

    setValidationErrors(errors);
  }, [dispatch, firstname, lastname, email, message]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (Object.keys(validationErrors).length) {
      return;
    }

    const newPost = {
      firstname,
      lastname,
      email,
      message,
    };

    await dispatch(createPostThunk(newPost));

    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
    setHasSubmitted(false);

    dispatch(getAllPostsThunk());
  };

  return (
    <section className="contactSection">
      <h1>How To Contact Me?</h1>
      <p>By Phone: (920) 242-4062</p>
      <h2>Message Me on Here</h2>
      <div className="formContainer">
        <form>
          <label>
            First Name:
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
          <div className="error">
            {hasSubmitted &&
              validationErrors.firstname &&
              `*${validationErrors.firstname}`}
          </div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
          <div className="error">
            {hasSubmitted &&
              validationErrors.lastname &&
              `*${validationErrors.lastname}`}
          </div>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="error">
            {hasSubmitted &&
              validationErrors.email &&
              `*${validationErrors.email}`}
          </div>
          <label>
            Message:
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <div className="error">
            {hasSubmitted &&
              validationErrors.message &&
              `*${validationErrors.message}`}
          </div>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
