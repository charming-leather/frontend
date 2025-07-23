import { Navigate } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Dashboard_test from "./pages/dashboard_test/dashboard_test.jsx";
import PrivateRoutes from "./pages/privateRoutes/privateRoutes.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Laybys from "./pages/laybys/laybys.jsx";

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
        path: '/dashboard_test',
        element: <Dashboard_test />
      },
      {
        path: '/dashboard/*',
        element: <Dashboard />
      }
    ]
  }
];
