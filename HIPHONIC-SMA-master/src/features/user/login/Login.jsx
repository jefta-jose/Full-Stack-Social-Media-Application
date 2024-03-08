// Login.jsx
import React, { useEffect, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import SocialMedia1 from '../../../assets/social-media1.jpg';
import { useForm } from "react-hook-form";
import SocialMedia1 from "../../../assets/social-media2.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAuthenticateUserMutation } from "../userApi";
import { ErrorToast, ToasterContainer, SuccessToast } from '../../../toaster/Toaster'
import { LoadingToast } from '../../../toaster/Toaster'; 
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [storedUser, setStoredUser] = useState([]);

  const [authenticateUser] = useAuthenticateUserMutation();

  const schema = yup.object().shape({
    Email: yup.string().email().required("Email is required"),
    Password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char"
      ),
  });

  // useEffect(() => {
  //   const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
  //   setStoredUser(userDetails);
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = async (data) => {
    try {
      const response = await authenticateUser({
        Email: data.Email,
        Password: data.Password,
      });
      
      console.log(response.data.user);
      console.log(response.data.user.token);

      if (response.data && response.data.user.token) {
        console.log("User logged in:", response);

        localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));
        SuccessToast(response.data.message);

        setLoginError("");
        // setLoginSuccess("Logged In successfully!");

        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } else {
        setLoginSuccess("");
        console.log(response.data);
        ErrorToast(response.data.error);

        // setLoginError("Invalid email or password");
      }
    } catch (error) {
      toast.error('Check Your login Details')
      // ErrorToast(response.data.error);

      // setLoginSuccess("");
      // setLoginError("Invalid email or password");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col align-items-center flex-col ">
          <div className="form-wrapper">
          
            <form className="form sign-in" onSubmit={handleSubmit(loginUser)}>
              <h2>Sign In</h2>
             <div>
             <ToasterContainer />
             {loginError && <p className="error-message">{loginError}</p>}
             </div>
             <div>
             {loginSuccess && (
                <p className="success-message">{loginSuccess}</p>
              )}
             </div>
              <div>
              <div className="input-group">
                <div className="bx bxs-user">
                  <MdEmail />
                </div>
                <input
                  type="email"
                  id="Email"
                  name="Email" 
                  {...register("Email")}
                  placeholder="Email"
                />
                
              </div>
              <p className="errors">{errors.Email?.message}</p>
              </div>
              <div>
              <div className="input-group">
                <div className="bx bxs-user">
                  <RiLockPasswordLine />
                </div>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  {...register("Password")}
                  placeholder="Password"
                />
                
              </div>
              <p className="errors">{errors.Password?.message}</p>
              </div>
              <button className="signin-btn">Sign in</button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={() => navigate("/signup")} className="pointer">
                  Sign up here
                </b>
              </p>
            </form>
          </div>
          {/* <div className="form-wrapper">

          </div> */}
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text-sign-in">
            <h2>Welcome To Hiphonic SMA</h2>
          </div>
          <div className="sign-in-img">
            <img src={SocialMedia1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
