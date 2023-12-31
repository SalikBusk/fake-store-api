import React from "react";
import "./App.css";

import { SkeletonTheme } from 'react-loading-skeleton';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Index from "./Pages/Index";
import ProductPage from "./Pages/SinglePage/ProductPage";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Index/>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <ProductPage/>
        ),
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#dedede" highlightColor="#fff">
        <RouterProvider router={router}/>
      </SkeletonTheme>
    </div>
  );
}

export default App;
