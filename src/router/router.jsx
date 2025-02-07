import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import Details from "../components/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
  },
  {
    path: "/project/:id",
    element: <Details />,
  },
  
]);

export default router;
