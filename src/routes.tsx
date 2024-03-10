import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
