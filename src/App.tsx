import React from "react";
import { LoginPage } from "./Screens/Login/Login";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ForgotPassword } from "./Screens/Login/ForgotPassword";
import { ResetPassword } from "./Screens/Login/ResetPassword";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
      </Routes>
    </Router>
    {/* <LoginPage /> */}
    </>
  );
}

export default App;
