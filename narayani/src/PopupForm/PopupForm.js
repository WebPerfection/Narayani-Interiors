import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import axios from "axios"
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import "./PopupForm.css"; // import the CSS file
import { CloseModel, toggelModel } from "../Redux/Action";

export const PopupForm = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const { ModelCheck } = useSelector((store) => store);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [inputError, setInputError] = useState(false); // State for input validation
  const dispatch = useDispatch();
console.log(name)
  useEffect(() => {
    setShow(ModelCheck);
  }, [ModelCheck]);

  useEffect(() => {
    if(localStorage.getItem("Narayani-User")===undefined){
      setTimeout(() => {
        dispatch(toggelModel());
      }, 3000);
    }
  }, []);

  const handleClose = () => {
    setShowOTP("")
    setName("")
    setEmail("")
    setPh("")
    setUser("")
    dispatch(CloseModel())
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    if (name.trim() === "" || ph.trim() === "") {
      setInputError(true);
      return;
    }
    setLoading(true);
    setInputError(false);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify(e) {
    e.preventDefault()
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        postUserData();
        toast.success("Submit successfully!");
        
        setLoading(false);
        setShowOTP("")
        
        localStorage.setItem("Narayani-User","Authenticate")
      })
      .catch((err) => {
        console.log(err);
        toast.error("Wrong Otp!");
        setLoading(false);
      });
  }

  const postUserData = () => {
    const payload = {
      name,
      email,
      number: "+" + ph
    }
    console.log(payload)
    axios.post("https://azure-hen-cap.cyclic.app/users/register", payload)
      .then(res => console.log(res))
      .catch((err) => console.log(err))
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
          {user ? (
            <h2>Submit Success</h2>
          ) : (
            <div>
              <h4>Welcome to Narayani-Interiors</h4>
              {showOTP ? (
                <>
                  <div>
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label htmlFor="otp">Enter your OTP</label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container"
                  ></OtpInput>
                </>
              ) : (
                <>
                  <label htmlFor="">Enter Your Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                  />
                  <label htmlFor="">Enter Your Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="">Verify your phone number</label>
                  <PhoneInput
                    country={"in"}
                    value={ph}
                    onChange={setPh}
                    required={true}
                    style={{width:'90%'}}
                    
                  />
                  {inputError && <p className="error-message">Please fill in all the fields</p>}
                </>
              )}
            </div>
          )}
        </div>
      </section>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {
          loading ?  <Button><CgSpinner size={20} className="mt-1 animate-spin" /></Button>:showOTP ?<Button onClick={onOTPVerify} className="send-bt" variant="primary">
        
        Verify OTP
        </Button>:<Button onClick={onSignup} className="send-bt" variant="primary">
        
        Send code via SMS
      </Button>
        }
        
      </Modal.Footer>
    </Modal>
  );
};

