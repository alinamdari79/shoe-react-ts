// import { useState } from "react";
import { Routes, Route } from "react-router";
import Onboarding from "./pages/onboarding/onboarding";
import LoginPage from "./pages/login/loginPage";
import SignUpPage from "./pages/sign up/signUpPage";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [] = useState();
  return (
    <Routes>
        <Route index path="/" element={<Onboarding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
