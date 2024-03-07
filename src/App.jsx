import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots1 from "./routs/Roots1";
import Categories from "./pages/categore/Categories";
import Cards from "./pages/cards/Cards";
import Products from "./pages/Products/Products";
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import Signin from './pages/signin/Signin';
import SignUp from "./pages/signUp/SignUp";
import ProtectedRouts from './component/ProtectedRouts';
import Details from './pages/Details';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots1 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
  
        {
          path: "/products",
       
          element: 
          <Products />
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/cart",
          element: 
          <ProtectedRouts>
          <Cards />
        </ProtectedRouts>
        },
          {
          path: "/signin",
          element: <Signin/>,
        },{
          path: "/signUp",
          element: <SignUp/>,
        },{
          path: "/details",
          element: <Details/>,
        }
      ],
    },
  ]);



  return (
    <>
    
      <RouterProvider router={router} />
      <ToastContainer />

    </>
  );
}

export default App;
