import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts";
import { CreatePage, DashboardPage, ProfilePage } from "../pages";
import { TasksLoader } from "../pages/dashboard-page/dashboard-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        loader: TasksLoader,
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
