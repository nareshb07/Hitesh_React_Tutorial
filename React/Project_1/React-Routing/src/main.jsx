import React from 'react'; // Ensure React is imported if using JSX
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Form
} from "react-router-dom";

import Layout from './components/layout/layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Company from './components/About/company.jsx';
import Me from './components/About/Me.jsx';
import Login from './components/Login/Login.jsx';
import User from './components/User/User.jsx'


// Define your router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="about/" element={<About />} >
        <Route path="company" element={<Company />} />
      </Route>

      <Route path="login/" element = {< Login/>} />
      
      <Route path = "user/" element = {< User/>}>
        <Route path = ":userid" element = {< User/>}/>
      </Route>
    </Route>


  )
);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
