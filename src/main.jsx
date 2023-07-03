import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import About from './pages/About/About.jsx';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/about",
//         element: <About></About>
//       }
//     ]
//   },
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
)

