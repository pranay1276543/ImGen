import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Buy_Credit from "./pages/Buy_Credit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { showlogin } = useContext(AppContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          {showlogin && <Login />}
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/result",
      element: (
        <>
          <Navbar />
          {showlogin && <Login />}
          <Result />
          <Footer />
        </>
      ),
    },
    {
      path: "/buy",
      element: (
        <>
          <Navbar />
          {showlogin && <Login />}
          <Buy_Credit />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right"/>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
