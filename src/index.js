import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Post from './Post';
import { Random } from './Random';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
},
{
  path: "/Random",
  element: <Random/>,
},
{
  path:"post/:id",
  element: <Post />
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

