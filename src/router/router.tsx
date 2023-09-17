import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts";
import { CreatePage, DashboardPage, ProfilePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "create",
        element: <CreatePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
