import "./Admin.css";

function Admin({ heroImg }) {
  return (
    <section className="heroSection">
      <div className="heroImgContainer">
        <img className="heroImg" src={heroImg} alt="Bee Thao Profile Picture" />
      </div>
    </section>
  );
}

export default Admin;
