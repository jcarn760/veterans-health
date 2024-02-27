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

Amplify.configure(awsExports);

export const App = ({ signOut, user }) => {
  // useEffect(() => {
  //   const addTodo = async () => {
  //     try {
  //       const result = await client.graphql({
  //         query: createTodo,
  //         variables: {
  //           input: {
  //             name: "UMGC CLASS ",
  //             description: "FINALLY ",
  //           },
  //         },
  //       });
  //       console.log(result); // Process the result as needed
  //     } catch (error) {
  //       console.error("Error adding todo", error);
  //     }
  //   };

  //   const listTodo = async () => {
  //     try {
  //       const result = await client.graphql({ query: listTodos });
  //       console.log("List To Do");
  //       console.log(result);
  //     } catch (error) {
  //       console.error("Error adding todo", error);
  //     }
  //   };
  //   listTodo();
  //   addTodo(); // Call the async function
  // }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route exact path="/auth" element={<ProtectedApp />} />
      </Routes>
    </>
  );
};
