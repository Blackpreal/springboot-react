import { useState } from "react";
import "../css/Register.css";

function Register() {
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mailID, setMailID] = useState("");
  const [password, setPassword] = useState("");
  // const [otp, setOtp] = useState("");
  const [otpvisible, setOtpVisible] = useState(null);
  // const [confimOtp, setconfimOtp] = useState("");

  // function verifyOtp() {

  //   if (
  //     userName !== "userName" &&
  //     mobileNumber !== "mobileNumber" &&
  //     mailID !== "mailID" &&
  //     password !== "password"
  //   ) {
  //     fetch(`http://localhost:8080/sk/otp/${mailID}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) =>setconfimOtp(data))
  //     console.log(confimOtp)
  //     if (confimOtp === true || confimOtp === otp) {
  //       if (otp === confimOtp) {
  //         alert("Otp Send successful!");
  //       } else {
  //         alert("Otp Send Failure!");
  //       }
  //     } else {
  //       setMailID("");
  //     }
  //   }
  // }

  function clearfield(){
    setUserName("")
    setMailID("")
    setMobileNumber("")
    setPassword("")

  }

  function registerpage() {
    if (
      userName !== "" &&
      mobileNumber !== "" &&
      mailID !== "" &&
      password !== ""
    ) {
      fetch("http://localhost:8080/sk/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          mobileNumber: mobileNumber,
          mailID: mailID,
          password: password,
        }),
      })
      alert("Registration successful!");
    }else{
      alert("Registration failed. Please try again later.");
      
    }
    clearfield()
  }

  return (
    <div className="root-login">
      <div className="l-pane">
        <span>Register</span>
        <span>Username</span>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <span className="name">
          {userName === "" ? "Enter your username" : " "}
        </span>
        <span>Mobile Number</span>
        <input
          type="text"
          name="mobilenumber"
          id="mobileNumber"
          onChange={(e) => setMobileNumber(e.target.value)}
          value={mobileNumber}
        />
        <span className="number">
          {mobileNumber === "" ? "Enter mobile number" : " "}
        </span>
        <span>Email Id</span>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setMailID(e.target.value)}
          value={mailID}
        />
        <span className="mail">
          {mailID === "" || otpvisible !== null ? "Enter valid email Id" : " "}
        </span>
        <span>Password</span>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <span className="password">
          {password === "" ? "Enter Password" : " "}
        </span>
        {/* <button type="otp" className="otpbutton" onClick={verifyOtp}>
          Verify OTP
        </button> */}
        {/* <input
          type="text"
          placeholder="Enter OTP"
          name="otp"
          id="otp"
          onChange={(e) => setOtp(e.target.value)}
          value={otp}
        /> */}
        {/* <span className="otp"> "Enter mail OTP"</span> */}
        <button type="submit" className="submit" onClick={registerpage}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
