import "./Contact.css";

function Contact() {
  return (
    <section className="contactSection">
      <h1>How To Contact Me?</h1>
      <p>By Phone: (920) 242-4062</p>
      <h2>Message Me on Here</h2>
      <div className="formContainer">
        <form>
          <label>
            First Name:
            <input type="text" />
          </label>
          <label>
            Last Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="text" />
          </label>
          <label>
            Message:
            <textarea></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
