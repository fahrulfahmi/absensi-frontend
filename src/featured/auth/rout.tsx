import React from "react";
import type { RouteObject } from "react-router-dom";
import LoginForm from "./components/Login";

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginForm />,
  },
];
