import "./../styles/contact.css"
import Image from "../assets/contact.avif";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <div className="rightSide">
        <h1>Book Table</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter full name" />
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" placeholder="Enter email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact