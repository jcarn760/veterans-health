import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ClippedDrawer from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { PrivateRoutes } from "./components/Routes/PrivateRoutes";
import { Account } from "./pages/Account";
import { MentalHealth } from "./pages/MentalHealth";
import  Feedback  from "./pages/Feedback";
import  Workouts  from "./pages/Workouts/Workouts";
import { NothingHere } from "./pages/404";
import { LandingPage } from "./pages/LandingPage";
import { Register } from "./pages/Register";
import Cardio from "./pages/Workouts/Cardio";
import Plyometrics from "./pages/Workouts/Plyometrics";
import Strenght from "./pages/Workouts/Strenght";
import Stretching from "./pages/Workouts/Stretching";



export const App = () => {
  return (
    <div className="App">
      <Router>
        <ClippedDrawer />
        <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/mental_health" element={<MentalHealth />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/workouts" element={<Workouts />} />
            <Route exact path="/cardio" element={<Cardio/>} />
            <Route exact path="/plyometrics" element={<Plyometrics/>} />
            <Route exact path="/strenght" element={<Strenght/>} />
            <Route exact path="/stretching" element={<Stretching/>} />
          </Route>
          <Route path="*" element={<NothingHere />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}