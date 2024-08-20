import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutRoot from './LayoutRoot.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Login from './components/Login/Login.jsx'
import User from './components/User/User.jsx'
import Register from './components/Register/Register.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path : "/",
//       element : <LayoutRoot />,
//       children : [
//         {
//           path : "",
//           element : <Home />
//         },
//         {
//           path : "about",
//           element: <About />
//         },
//         {
//           path : "services",
//           element : <Services />
//         },
//         {
//           path : "contactUs",
//           element : <ContactUs />
//         },
//         {
//           path : "login",
//           element : <Login />
//         }
//       ]
//     }
//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutRoot />}>
      <Route path='' element={<Home /> }/>
      <Route path='about' element={<About /> }/>
      <Route path='services' element={<Services /> }/>
      <Route path='contactUs' element={<ContactUs /> }/>
      <Route path='login' element={<Login /> }/>
      <Route path='register' element={<Register /> }/>
      <Route path='User/:id' element={<User /> }/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
