import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import "./PopupForm.css"; // import the CSS file
import { CloseModel, toggelModel } from "../Redux/Action";


export const PopupForm = () => {
  const [ph, setPh] = useState("");
  const { ModelCheck } = useSelector((store) => store);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [inputError, setInputError] = useState(false); // State for input validation
  const [admin,setAdmin]=useState(false)
  const [password,setPassword]=useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem("adminAuthenticate")){

    }
    else{
      setShow(ModelCheck);
    }
    
  }, [ModelCheck]);

  useEffect(() => {
    if(localStorage.getItem("adminAuthenticate")){
      console.log(localStorage.getItem("adminAuthenticate"))
    }
    else if (!localStorage.getItem("Narayani-User")) {
      setTimeout(() => {
        dispatch(toggelModel());
      }, 3000);
    }
  }, []);

  const handleClose = () => {
    setName("");
    setEmail("");
    setPh("");
    setAdmin(false)
    setPassword("")
    setInputError(false)
    dispatch(CloseModel());
  };

  const validateInputs = () => {
    if (!name || !ph) {
      setInputError(true);
      return false;
    }
    setInputError(false);
    return true;
  };

  const postUserData = () => {
    if (!validateInputs()) {
      return;
    }

    const payload = {
      name,
      email,
      number: "+91" + ph,
    };
   if(email==="moashiq2018@gmail.com"){
     setAdmin(true)
     return;
   }
    axios
      .post("https://azure-hen-cap.cyclic.app/users/register", payload)
      .then((res) => {
        setName("");
        setEmail("");
        setPh("");
        
        toast.success("Form submitted successfully!"); // Set the user state or update as per your requirement
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error submitting the form. Please try again.");
      });
  };
const adminClick=()=>{
 
  if(password==="Admin@123" && email==="moashiq2018@gmail.com" && name==="Ashiq"){
    setAdmin(false)
    setName("");
    setEmail("");
    setPh("");
    
    localStorage.setItem("adminAuthenticate",true)
    setShow(false)
    toast.success("Login Admin SuccessFull!");
  }
  else{
     toast.error("Something Went wrong");
  }
}
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Narayani-Interiors Consultation Form</Modal.Title>
      </Modal.Header>

      <section className="section">
        <div className="welcome-container">
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          {admin?<div>
              <h4>Welcome to Narayani-Interiors</h4>

              <label htmlFor="">Enter Admin Password</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
             
            </div>:<div>
              <h4>Welcome to Narayani-Interiors</h4>

              <label htmlFor="">Enter Your Full Name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter Your Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="">Enter Your Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="">Enter your phone number</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                alue={ph}
                onChange={(e) => setPh(e.target.value)}
                required
              />
              {inputError && (
                <p className="error-message" style={{color:"red"}}>Please fill in all the fields</p>
              )}
            </div>}
        </div>
      </section>
      <Modal.Footer>
        {admin?<Button variant="secondary" onClick={adminClick}>
          Submit
        </Button>:<Button variant="secondary" onClick={postUserData}>
          Submit
        </Button> }
        
      </Modal.Footer>
    </Modal>
  );
};
