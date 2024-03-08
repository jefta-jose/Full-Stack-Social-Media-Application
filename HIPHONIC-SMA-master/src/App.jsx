//Importing styling file
import { Route, Router, Routes } from "react-router-dom";
import "./App.scss";


import MainContent from './layouts/Main';

import Login from "./features/user/login/Login";
import SignUp from "./features/user/register/SignUp";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<Main/>} /> */}
        <Route path="*" element={<MainContent/>} />
      </Routes>
    </div>
    
  );
}

export default App;
