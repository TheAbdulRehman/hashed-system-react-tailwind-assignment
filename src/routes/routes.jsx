import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "@/components/layouts/app-layout";
import ErrorPage from "../pages/error-page";
import DashboardPage from "@/pages/dashboard-page";
import CalendarPage from "@/pages/calendar-page";
import SalesPage from "@/pages/sales-page";
import ExpensesPage from "@/pages/expenses-page";
import EmployeePage from "@/pages/employee-page";
import CustomerPage from "@/pages/customer-page";
import ProductsPage from "@/pages/products-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/sales",
        element: <SalesPage />,
      },
      {
        path: "/expenses",
        element: <ExpensesPage />,
      },
      {
        path: "/employee",
        element: <EmployeePage />,
      },
      {
        path: "/customers",
        element: <CustomerPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
