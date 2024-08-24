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
import ServiceDetails from './components/ServiceDetails/ServiceDetails.jsx'
import Rating from './components/Ratings/Ratings.jsx'
import Plan from './components/Plan/Plan.jsx'
import Construction from './components/Construction/Construction.jsx'
import Renovation from './components/Renovation/Renovation.jsx'

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
      <Route path='serviceDetails/:type' element={<ServiceDetails />} />
      <Route path='rateus' element={<Rating /> }/>
      <Route path='plan/:serviceDetails' element={<Plan />}/>
      <Route path='construction/:constructionPlans' element={<Construction />}/>
      <Route path='renovation/:renovationPlans' element={<Renovation />}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
