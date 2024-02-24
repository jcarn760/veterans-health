import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ClippedDrawer from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { MentalHealth } from "./pages/MentalHealth";
import Feedback from "./pages/Feedback";
import Workouts from "./pages/Workouts/Workouts";
import { NothingHere } from "./pages/404";
import { LandingPage } from "./pages/LandingPage";
import { Register } from "./pages/Register";
import Cardio from "./pages/Workouts/Cardio";
import Plyometrics from "./pages/Workouts/Plyometrics";
import Strenght from "./pages/Workouts/Strenght";
import Stretching from "./pages/Workouts/Stretching";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { ProtectedRoutes } from "./components/ProtectedRoute";
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

const ProtectedApp = ({ signOut }) => {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/mental_health" element={<MentalHealth />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/workouts" element={<Workouts />} />
        <Route exact path="/cardio" element={<Cardio />} />
        <Route exact path="/plyometrics" element={<Plyometrics />} />
        <Route exact path="/strenght" element={<Strenght />} />
        <Route exact path="/stretching" element={<Stretching />} />
        <Route path="*" element={<NothingHere />} />
      </Routes>
    </>
  );
};

export default withAuthenticator(ProtectedApp)