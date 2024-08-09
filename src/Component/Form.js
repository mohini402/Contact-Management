import "../Component/Form.css";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  function handleSaveContact() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[A-Za-z\s]+$/;
    const mobilePattern = /^\d{10}$/;

    if (
      name !== "" &&
      namePattern.test(name) &&
      mobile !== "" &&
      mobilePattern.test(mobile) &&
      (email === "" || emailPattern.test(email))
    ) {
      const details = JSON.parse(localStorage.getItem("details")) || [];
      details.push({ name: name, mobileNo: mobile, email: email });

      localStorage.setItem("details", JSON.stringify(details));
    } else {
      alert("Please enter valid contact details.");
    }
  }
  return (
    <div className="contactForm">
      <form>
        <div className="input-container">
          <div className="input-group">
            <label className="nameClass" htmlFor="name">
              Name:
            </label>
            <input
              value={name}
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="mobileClass" htmlFor="mobile">
              Mobile Number:
            </label>
            <input
              value={mobile}
              type="number"
              id="mobile"
              placeholder="Enter mobile number"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              type="email"
              id="email"
              placeholder="Enter email id (optional)"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="button-group">
          <button className="save-btn" onClick={handleSaveContact}>
            Save Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
