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
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const dispatch = useDispatch();

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  useEffect(() => {
    if (localStorage.getItem("adminAuthenticate")) {
      // Check if admin is authenticated
      // Do something if admin is authenticated
    } else {
      setShow(ModelCheck);
    }
  }, [ModelCheck, show]);

  useEffect(() => {
    if (localStorage.getItem("adminAuthenticate")) {
      console.log(localStorage.getItem("adminAuthenticate"));
      // Do something if admin is authenticated
    } else if (!localStorage.getItem("Narayani-User")) {
      setTimeout(() => {
        dispatch(toggelModel());
      }, 3000);
    }
  }, []);

  const handleClose = () => {
    setName("");
    setEmail("");
    setPh("");
    setAdmin(false);
    setPassword("");
    setNameError("");
    setEmailError("");
    setPhoneError("");
    dispatch(CloseModel());
  };

  const validateInputs = () => {
    let isValid = true;

    if (!name) {
      setNameError("Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!ph) {
      setPhoneError("Please enter your phone number");
      isValid = false;
    } else if (!isValidPhone(ph)) {
      setPhoneError("Please enter a valid phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    return isValid;
  };
  // if(show==false){
  //   setTimeout(()=>{
  //     dispatch(CloseModel());
  //   },3000)
  // }
  const postUserData = () => {
    if (!validateInputs()) {
      return;
    }

    const payload = {
      name,
      email,
      number: "+91" + ph,
    };

    if (email === "ankitjewrajka1234@gmail.com") {
      setAdmin(true);
      return;
    }
  
    axios
      .post("https://dull-lime-wombat-veil.cyclic.app/users", payload)
      .then((res) => {
        setName("");
        setEmail("");
        setPh("");
        localStorage.setItem("Narayani-User", true);
        toast.promise(
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setShow(false)
            }, 3000); // Adjust the duration of the toast here (in milliseconds)
          }),
          {
            loading: "Submitting...",
            success: "Form submitted successfully!",
            error: "Error submitting the form. Please try again.",
          }
          
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error submitting the form. Please try again.");
      });
  };

  const adminClick = () => {
    if (password === "Admin@123" && email === "ankitjewrajka1234@gmail.com") {
      setAdmin(false);
      setName("");
      setEmail("");
      setPh("");
      localStorage.setItem("adminAuthenticate", true);
      setShow(false);
      toast.success("Login Admin Successful!");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Narayani-Interiors Consultation Form</Modal.Title>
      </Modal.Header>

      <section className="section">
        <div className="welcome-container">
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          {admin ? (
            <div>
              <h4>Welcome to Narayani-Interiors</h4>

              <label htmlFor="">Enter Admin Password</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <h4>Welcome to Narayani-Interiors</h4>

              <label htmlFor="">Enter Your Full Name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter Your Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="error-message">{nameError}</p>}

              <label htmlFor="">Enter Your Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error-message">{emailError}</p>}

              <label htmlFor="">Enter your phone number</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={ph}
                onChange={(e) => setPh(e.target.value)}
                required
              />
              {phoneError && <p className="error-message">{phoneError}</p>}
            </div>
          )}
        </div>
      </section>
      <Modal.Footer>
        {admin ? (
          <Button variant="secondary" onClick={adminClick}>
            Submit
          </Button>
        ) : (
          <Button variant="secondary" onClick={postUserData}>
            Submit
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
