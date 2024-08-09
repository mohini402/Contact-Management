import "../Component/Contact.css";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import EditForm from "./Edit"

function Save() {
  const [savedDetails, setSavedDetails] = useState([]);
  const [animationData, setAnimationData] = useState(null);
  const [savedIndex, setSavedIndex]=useState(null);

  const [editShow,setEditShow] =useState(false);
  const [savedContactShow,setSavedContactShow]=useState(true);

  useEffect(() => {
    // Fetch contact details from local storage
    const details = JSON.parse(localStorage.getItem("details")) || [];
    setSavedDetails(details);

    // Fetch Lottie animation data
    fetch(
      "https://lottie.host/798d5fb2-d7b7-4e88-b369-5c2b56594b3d/exzco7ai4D.json"
    )
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error fetching animation data:", error));
  }, []);

  function handleDeletedData(index)
  {
    const details = JSON.parse(localStorage.getItem("details")) || [];
    details.splice(index,1);
    setSavedDetails(details);
    localStorage.setItem("details",JSON.stringify(details));
  }

  function handleEditData(index)
  {
    setSavedIndex(index);
    setEditShow(true);
    setSavedContactShow(false);
  }

  function handleSaveEdit(name, mobile, email) {
    const details = JSON.parse(localStorage.getItem("details")) || [];
    if (savedIndex !== null) {
      details[savedIndex] = { name, mobileNo: mobile, email };
      setSavedDetails(details);
      localStorage.setItem("details", JSON.stringify(details));
      setSavedIndex(null);
    }

    setEditShow(false);
    setSavedContactShow(true);
  }

  return (
    <div>
    {savedIndex!==null && editShow &&(
      <EditForm
       
        editName= {savedDetails[savedIndex].name}
        editMobile={savedDetails[savedIndex].mobileNo}
        editEmail={savedDetails[savedIndex].email}
        Save={handleSaveEdit}
      />
    )}

    {savedContactShow && (
      <div>
        <div id="contactList">
          {savedDetails.length > 0
            ? savedDetails.map((contact, index) => (
                <div key={index} className="contact">
                 <button className="deletebtn" onClick={()=>handleDeletedData(index)}>Delete</button>
                 <button className="editbtn" onClick={()=>handleEditData(index)}>Edit</button>
                  <h3 className="contact-name">
                    <span>Name:</span>
                    {contact.name}
                  </h3>
                  <h4 className="contact-number">
                    <span>Contact No:</span>
                    {contact.mobileNo}
                  </h4>
                  <h5 className="contact-email">
                    <span>Email ID:</span>
                    {contact.email}
                  </h5>
                  <hr />
                </div>
              ))
            : animationData && (
                <Lottie
                  animationData={animationData}
                  style={{ width: "500px", height: "500px" }}
                />
              )}
        </div>
      </div>
    )}
    </div>
  );
}

export default Save;
