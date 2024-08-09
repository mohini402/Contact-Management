import "../Component/Edit.css";
import { useState,useEffect } from "react";

function EditForm({editName="",editMobile="",editEmail="",Save}) {
  const [name, setName] = useState(editName);
  const [mobile, setMobile] = useState(editMobile);
  const [email, setEmail] = useState(editEmail);

  useEffect(()=>{
    setName(editName);
    setMobile(editMobile);
    setEmail(editEmail);
  },[editName,editMobile,editEmail]);

  function handleEditContact() {
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
      Save(name,mobile,email);
    } else {
      alert("Please enter valid contact details.");
    }
  }
  return (
    <div className="editContactForm">
      <form>
        <div className="edit-input-container">
          <div className="edit-input-group">
            <label className="editNameClass" htmlFor="name">
              Name:
            </label>
            <input
              value={name}
              type="text"
              id="editName"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="edit-input-group">
            <label className="editMobileClass" htmlFor="mobile">
              Mobile Number:
            </label>
            <input
              value={mobile}
              type="number"
              id="editMobile"
              placeholder="Enter mobile number"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="edit-input-group">
            <label className="editeEmailClass" htmlFor="email">Email:</label>
            <input
              value={email}
              type="email"
              id="editEmail"
              placeholder="Enter email id (optional)"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="edit-button-group">
          <button className="edit-btn" onClick={handleEditContact}>
            Edit Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
