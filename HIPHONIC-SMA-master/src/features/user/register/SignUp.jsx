// SignUp.jsx
import React, { useEffect, useState } from 'react';
import './SignUp.scss';
import { useFormAction, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import SocialMedia1 from '../../../assets/social-media1.jpg';
import { useForm } from "react-hook-form";
import SocialMedia2 from '../../../assets/social-media2.jpg'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAddUserMutation } from '../userApi';
import { IoPricetagsOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { ErrorToast, ToasterContainer, SuccessToast } from '../../../toaster/Toaster'
import { LoadingToast } from '../../../toaster/Toaster'; 



const SignUp = () => {
     
  const [navToLogin, setNavToLogin] = useState('/signup');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate()

  const [addUser]=useAddUserMutation()

  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Email: yup.string().email().required("Email is required"),
    Password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char"
      ),
      TagName: yup.string().required("TagName is required"),
      Location: yup.string().required("Location is required")

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const loginNavigation = () => {
    setNavToLogin(navToLogin);
    navigate("/");
  };

   const onSubmit = async(formData) => {
    LoadingToast();
try{
  
  const response=await addUser({
    Username: formData.Username,
    Email: formData.Email,
    Password: formData.Password,
    TagName: formData.TagName,
    Location: formData.Location,
  });
  console.log('User registered:', response);

  if (response.data && response.data.message) {
    SuccessToast(response.data.message);
    // setSuccessMessage(response.data.message);
    // setErrorMessage('');
    reset();

    setTimeout(() => {
      navigate("/");
    }, 2000);
  } else { 
    // 5319983 
    // ErrorToast(response.data.error);
    setErrorMessage('Registration failed. Please try again.');
    // setSuccessMessage('');
  }
}catch (error) {
    console.error('Error during registration:', error);
    // ErrorToast(response.data.error);
    setErrorMessage('Registration failed. Please try again.');
    // setSuccessMessage('');
  }
  LoadingToast(false);
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <form className="form sign-up" onSubmit={handleSubmit(onSubmit)}>
            <ToasterContainer />
            <div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div>
            {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
             <div>
             <div className="input-group">
              
              <div className='bx bxs-user'><FaUser /></div>
              <input type="text" name='Username' id='Username'  {...register("Username")} placeholder="Username" />
            </div>
            <p className="errors">{errors.Username?.message}</p>
             </div>
             <div>
             <div className="input-group">
              <div className='bx bxs-user'><MdEmail /></div>
                <input type="email"  name='Email' id='Email'  {...register("Email")} placeholder="Email" />
                
              </div>
              <p className="errors">{errors.Email?.message}</p>
             </div>
              <div>
              <div className="input-group">
              <div className='bx bxs-user'><RiLockPasswordLine /></div>
                <input type="password" id='Password' name='Password' {...register("Password")} placeholder="Password" />
                
              </div>
              <p className="errors">{errors.Password?.message}</p>
              </div>
             <div>
             <div className="input-group">
              <div className='bx bxs-user'><IoPricetagsOutline /></div>
                <input type="text"  {...register("TagName")}  id='TagName' name='TagName' placeholder="TagName" />
                
              </div>
              <p className="errors">{errors.TagName?.message}</p>
             </div>
              <div>
              <div className="input-group">
              <div className='bx bxs-user'><CiLocationOn /></div>
                <input type="text"  {...register("Location")}  id='Location' name='Location' placeholder="Location" />
                
              </div>
              <p className="errors">{errors.Location?.message}</p>
              </div>
              <button className='signup-btn' type='submit'>
                Sign up
              </button>
              <p className='auth-link'>
                <span >
                  
                  Already have an account?
                </span>
                <b onClick={loginNavigation} className="pointer">
                  Sign in here
                </b>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="img sign-up">
            <img src={SocialMedia1} alt="" />
            {/* <img src={SocialMedia2} alt="" /> */}
          </div>
          <div className="text sign-up">
            <h2>
              Join with us
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
