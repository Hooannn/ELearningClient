import { Suspense } from "react";
import PrivateRoute from "../components/PrivateRoute";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Global from "../Global";
import ClassroomPage from "../pages/ClassroomPage";
import CalendarPage from "../pages/CalendarPage";
import ClassworkPage from "../pages/ClassworkPage";
import NeedReviewPage from "../pages/NeedReviewPage";
import TodoPage from "../pages/TodoPage";
const rootRouter = [
  {
    path: "/",
    element: (
      <Suspense>
        <PrivateRoute>
          <Global>
            <MainLayout />
          </Global>
        </PrivateRoute>
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/need-review",
        element: <NeedReviewPage />,
      },
      {
        path: "/todo",
        element: <TodoPage />,
      },
      {
        path: "/classroom/:classroomId",
        element: <ClassroomPage />,
      },
      {
        path: "/classroom/:classroomId/classwork/:classworkId",
        element: <ClassworkPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default rootRouter;
