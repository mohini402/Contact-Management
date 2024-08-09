import './App.css';
import MyForm from './Component/Form';
import Save from "./Component/Contact";
import {useState} from 'react';

function App() {
  const [contactForm,setContactForm] = useState(false);
  const [contactSave,setContactSave] = useState(false);
  function handleForm()
  {
    setContactForm(true);
  }

  function handleSave()
  {
    setContactSave(true);
  }

  function handleBack()
  {
    setContactForm(false);
    setContactSave(false);
  }
  return (
    <div className="App">
      <h1>Contact Management</h1>
      {(contactForm || contactSave) && (
        <button className="back-btn" onClick={handleBack}>
          Back to Home
        </button>
      )}
      {contactForm && <MyForm />}
      {contactSave && <Save />}
      {!contactForm && !contactSave && (
        <div className='button-container'>
          <button id='createContactBtn' className='btn' onClick={handleForm}>Create Contact</button>
          <button id='seeContactBtn' className='btn' onClick={handleSave}>Display Contacts</button>
        </div>
      )}
    </div>
  );
}

export default App;
