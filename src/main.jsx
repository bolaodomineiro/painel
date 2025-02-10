import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [{ path: "/*", element: <App /> }],
  {
    future: { v7_relativeSplatPath: true, v7_startTransition: true  } // ✅ Ativa a nova lógica do React Router v7
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
