// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
// import ErrorPage from './pages/ErrorPage';
import HomePage from './components/pages/About/About';
import ProjectPage from './components/pages/Projects/Projects';
import ContactPage from './components/pages/Contact/Contact';
import ResumePage from './components/pages/Resume/Resume'


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
