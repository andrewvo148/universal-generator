
import * as React from 'react'
import { Routes, Route, Outlet, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayout from './layouts/Dashboard';
import EntityPage from './pages/Entity';
import DTOPage from './pages/DTO';


let router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: EntityPage,
      },
      {
        path: "/dto",
        Component: DTOPage,
        
      }
    ],
  },
])
function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App


