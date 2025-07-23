import { Navigate } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import PrivateRoutes from "./pages/privateRoutes/privateRoutes.jsx";

export const routes = [
  {
    path: '/',
    element: <Navigate to="/dashboard" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
];
