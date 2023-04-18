import React, { useState } from "react";
import "./style.scss"
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorText, setErrorText] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users-list"));

    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (user) {
 localStorage.setItem("usertoken", formData.password);
 window.location.reload()
    }else{
      setErrorText("Invalid email or password");
    }
    
  };

  return (
    <div className="container1"> 
    <div>
  <div className="title">Login
  </div>
  <div className="content">
  <div className="user-details1">
 
  
        <div className="input-box1">
          <label className="details">Email</label>
          <input type="text"  name={'email'}  placeholder="Enter your email" required onChange={handleChange}
value={formData.email}
          />
         
        </div>
      
        <div className="input-box1">
          <label className="details">Password</label>
          <input type="password" name={'password'}  placeholder="Enter your password" required onChange={handleChange}
      value={formData.password}
          /> 
         
        </div>
     
  
 
      </div>
      {errorText && <p>{errorText}</p>}
      <div className="button">
     <button onClick={handleLogin}>Login</button>
      </div>
  </div>       
  <div>
</div>
</div>
</div>

  );
};

export default Login;
