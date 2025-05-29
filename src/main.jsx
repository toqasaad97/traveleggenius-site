import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './components/home';
import VisaForm from './components/vosaForm';
import VisaInfoArabic from './components/visaInfo';
import Blog from './components/blog';
import Contact from './components/Contact';
import Saudi from './components/saudia';
import QatarVisaTypes from './components/qatar';
import UAE from './components/uae';
import Muscat from './components/muscat';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apply-visa",
        element: <VisaForm />,
      },
      {
        path: "/visa-info",
        element: <VisaInfoArabic />,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/saudi",
        element: <Saudi />,
      },
      {
        path: "/qatar",
        element: <QatarVisaTypes />,
      },
      { path: "/emirates", element: <UAE /> },
      { path: "/masqat", element: <Muscat /> },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
