import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
// ++++++++++++++++++++++++++++++++++++++++++++
import {
  AuthLayout,
  LoginForm,
  SignupForm,
  ForgotPassword,
  ForgotPasswordChange,
  IsVerified,
} from "@/components/Auth/auth.js";

import Test from "./pages/Test.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";

// ################ Router ###################

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      // {
      //   path: "contact-us",
      //   element: <Contact />,
      // },
      {
        path: "about-us",
        element: <About />,
      },

      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginForm />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupForm />
          </AuthLayout>
        ),
      },

      // ##################  Auth ##################

      {
        path: "/verifyemail",
        element: <IsVerified />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
