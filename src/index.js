import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Post from './Post';
import { Random } from './Random';
import { Random2 } from './Random2';
import { Child } from './Child';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "post/:id",
        element: <Post />
      }
    ]
  },
  {
    path: "/Random",
    element: <Random />,
  },
  {
    path: "/Random2",
    element: <Random2 />,
    children: [
      {
        path: "Child",
        element: <Child />
      }
    ]
  },
  // {
  //   path: "post/:id",
  //   element: <Post />
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

