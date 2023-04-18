import React, { useState } from "react";

import "./style.scss"
const RegisterUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    specialist:""
  });
  const [errorData, setErrorData] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const validation = () => {
    let isValidation = true
    const errors = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      specialist: ""
    }

    if (!formData.firstName.trim().length) {
      isValidation = false
      errors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim().length) {
      isValidation = false
      errors.lastName = 'Last name is required'
    }
    if (!formData.age.trim().length) {
      isValidation = false
      errors.age = 'Age is required'
    }
    if (!formData.email.trim().length) {
      isValidation = false
      errors.email = 'Email is required'
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValidation = false
      errors.email= 'Invalid email address';
    }
    if (!formData.password.trim().length) {
      isValidation = false
      errors.password = 'Password is required'
    }
    if (formData.password.trim().length<8) {
      isValidation = false
      errors.password = 'Password must be at least 8 characters long'
    }
    if (!formData.confirmPassword.trim().length) {
      isValidation = false
      errors.confirmPassword = 'Confirm Password is required'
    }
    if (formData.password.length && formData.confirmPassword.length && formData.password.length !== formData.confirmPassword.length) {
      isValidation = false
      errors.confirmPassword = `Confirm Password doe's not much with password`
    }
    if (formData.specialist==="") {
      isValidation = false
      errors.specialist = 'Specialist is required'
    }

    setErrorData(errors)
    return isValidation
  }


  const createUser = () => {
    if (validation()) {
    let users = JSON.parse(localStorage.getItem("users-list"));

    if (users && users.length) {
      users.push(formData);
    } else {
      users = [formData];
    }

    localStorage.setItem("users-list", JSON.stringify(users));
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      specialist:""
    });
  }
  };


  return (
    <div className="container">
  <div>
  <div className="title">Registration 
  </div>
  <div className="content">

      <div className="user-details">
        <div className="input-box">
          <label className="details">Full Name</label>
          <input type="text" name={'firstName'} placeholder="Enter your name" required onChange={handleChange} 
             value={formData.firstName}
             style={{borderColor:errorData.firstName? "red":""}}
          />
           {errorData.firstName ? <p>{errorData.firstName}</p> : null}
        </div>
        <div className="input-box">
          <label className="details">Last name</label>
          <input type="text"  name={'lastName'} placeholder="Enter your username" required onChange={handleChange}
             value={formData.lastName}
             style={{borderColor:errorData.lastName? "red":""}}
          />
           {errorData.lastName ? <p>{errorData.lastName}</p> : null}
        </div>
        <div className="input-box">
          <label className="details">Email</label>
          <input type="text"  name={'email'}  placeholder="Enter your email" required onChange={handleChange}
value={formData.email}
style={{borderColor:errorData.email? "red":""}}
          />
           {errorData.email ? <p>{errorData.email}</p> : null}
        </div>
        <div className="input-box">
          <label className="details">Age</label>
          <input type="text"   name={'age'} placeholder="Enter your number" required onChange={handleChange}
              value={formData.age}
              style={{borderColor:errorData.age? "red":""}}
          />
           {errorData.age ? <p>{errorData.age}</p> : null}
        </div>
        <div className="input-box">
          <label className="details">Password</label>
          <input type="password" name={'password'}  placeholder="Enter your password" required onChange={handleChange}
      value={formData.password}
      style={{borderColor:errorData.password? "red":""}}
          /> 
          {errorData.password ? <p>{errorData.password}</p> : null}
        </div>
        <div className="input-box">
          <label className="details">Confirm Password</label>
          <input type="password" name={'confirmPassword'} placeholder="Confirm your password" required onChange={handleChange}
              value={formData.confirmPassword}
              style={{borderColor:errorData.confirmPassword? "red":""}}
          />
           {errorData.confirmPassword ? <p>{errorData.confirmPassword}</p> : null}
        </div>
      <div className="input-box">
      <label className="details">Specialist
          <select onChange={handleChange} name="specialist" defaultValue="Select Specialist" style={{borderColor:errorData.specialist? "red":""}}>
          <option value="">Select an option</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="UI/UX Design">UI/UX Design</option>
          </select>
      </label>
      {errorData.specialist ? <p>{errorData.specialist}</p> : null}
       </div>
       <div className="gender-details">
          <span className="gender-title">Gender</span>
        </div>
       <div  >
          <label className="details" > 
            <span>Male </span>
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              checked={formData.gender === "male"}
              value={"male"}
            />
            <span>Female </span>
            <input
              type="radio"
              name="gender"
              checked={formData.gender === "female"}
              value={"female"}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className="button">
     <button onClick={createUser}>Registration</button>
      </div>
  </div>       
  <div>
</div>
</div>
</div>
  )
}

export default  RegisterUser 
