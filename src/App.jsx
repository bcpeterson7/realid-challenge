import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout, CreditChecks, EvictionReports, NoPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NoPage />,
      },
      {
        path: "eviction-reports",
        element: <EvictionReports />,
      },
      {
        path: "credit-checks",
        element: <CreditChecks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
