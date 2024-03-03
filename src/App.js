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
import awsExports from "./aws-exports";
import ProtectedApp from "./ProtectedApp";
import "@aws-amplify/ui-react/styles.css";

import { generateClient } from "aws-amplify/api";
import config from "./amplifyconfiguration.json";

import { createTodo, updateTodo, deleteTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import { useEffect } from "react";

Amplify.configure(config);

const client = generateClient();


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
