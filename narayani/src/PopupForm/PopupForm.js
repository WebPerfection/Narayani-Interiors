import { useEffect, useState } from "react";
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
import { CloseModel } from "../Redux/Action";
export const PopupForm = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const { ModelCheck } = useSelector((store) => store);
  const [show, setShow] = useState(false);
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  useEffect(() => {
    setShow(ModelCheck);
  }, [ModelCheck]);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(CloseModel());
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
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        postUserData()
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
const postUserData=()=>{
  const payload={
    name,
    email,
    number:"+" + ph
  }
    axios.post("http://localhost:5000/register",payload)
    .then(res=>console.log(res))
    .catch((err)=>console.log(err))
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
            <h2>👍Login Success</h2>
          ) : (
            <div >
              <h4>Welcome to Narayani-Interiors</h4>
              {showOTP ? (
                <>
                  <div>
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label
                    htmlFor="otp"
                  >
                    Enter your OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container "
                  ></OtpInput>
                  <button onClick={onOTPVerify}>
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Verify OTP</span>
                  </button>
                </>
              ) : (
                <>
                  <label htmlFor="" >
                    Enter Your Full Name
                  </label>
                  <input type="text"  onChange={(e)=>setName(e.target.value)} required={true}/>
                  <label htmlFor="" >
                    Enter Your Email
                  </label>
                  <input type="text" onChange={(e)=>setEmail(e.target.value)} />
                  <label htmlFor="" >
                    Verify your phone number
                  </label>
                  <PhoneInput  country={"in"} value={ph} onChange={setPh} required={true}/>
                  
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
        <Button onClick={onSignup} className="send-bt" variant="primary">
          Send code via SMS
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// To show the popup form after 3 seconds
