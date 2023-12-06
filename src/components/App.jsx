import Layout from "./Layout";
import Accueil from "../pages/Accueil";
import AccueilView from "../pages/AccueilView";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const App = () => {
  const routes = [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true, //affiche la composante de défault dans le Outlet
          element: <Navigate to="/accueil" replace />,
        },
        {
          path: "accueil",
          element: <Accueil />,
          children: [
            {
              path: "projet",
              element: <AccueilView />,
            },
          ],
        },
      ],
    },

    {
      //peut importe l'url rentré, dirige vers about (solution a 404)
      path: "*",
      element: <Navigate to="/accueil" replace />,
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
