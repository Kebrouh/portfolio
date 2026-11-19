import { Navigate, RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { buildProjects } from "./i18n";

// Anciennes adresses: /accueil, /accueil/3 et /projet/3 (numéro) -> /projet/<slug>
const LegacyProject = () => {
  const { pos } = useParams();
  const project = buildProjects("en")[Number(pos) - 1];
  return <Navigate to={project ? `/projet/${project.slug}` : "/"} replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projet/:slug", element: <ProjectPage /> },
      { path: "accueil", element: <Navigate to="/" replace /> },
      { path: "accueil/:pos", element: <LegacyProject /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
