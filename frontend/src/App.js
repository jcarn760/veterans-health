import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ClippedDrawer from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
// import { API } from "aws-amplify";
import awsExports from "./aws-exports";
import ProtectedApp from "./ProtectedApp";
import "@aws-amplify/ui-react/styles.css";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listWorkouts } from "./graphql/queries";

Amplify.configure(awsExports);

export const App = ({ signOut, user }) => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route exact path="/auth" element={<ProtectedApp />} />
      </Routes>
    </>
  );
};
