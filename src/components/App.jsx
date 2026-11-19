import Layout from "./Layout";
import Accueil from "../pages/Accueil";
import AccueilView from "../pages/AccueilView";

import projet from "../data/projet.json";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";

const OldProjectRedirect = () => {
  const { pos } = useParams();
  return <Navigate to={`/projet/${pos}`} replace />;
};

const App = () => {
  const routes = [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Accueil projet={projet} />,
        },
        {
          path: "projet/:pos",
          element: <Accueil projet={projet} />,
          children: [{ index: true, element: <AccueilView /> }],
        },
        // anciennes URLs
        { path: "accueil", element: <Navigate to="/" replace /> },
        { path: "accueil/:pos", element: <OldProjectRedirect /> },
      ],
    },

    {
      //peut importe l'url rentré, dirige vers about (solution a 404)
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
