import React from 'react'
import App from '../App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function Rout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
    }
  ]);

  return <RouterProvider router={router}/>

}

export default Rout