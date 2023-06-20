import { createBrowserRouter, Outlet } from "react-router-dom";

import { Home } from './pages/home';
import { Detail } from "./pages/detail";
import { NotFound } from "./pages/notFound";

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail',
        element: <Detail />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default router;
