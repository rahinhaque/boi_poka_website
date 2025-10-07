import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import SignForm from '../Pages/SignUpForm/SignForm';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
        index: true,
        loader: ()=>fetch("/public/book.json"),
        path: "/",
        Component: Home
    },
    {
      path: "/about",
      Component: About
    },
    {
      path:"/signUP",
      Component: SignForm
    },
    {
      path:"/bookDetails/:id",
      Component: BookDetails
    }
  ]
  },
]);