import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import ErrorPage from "./pages/misc/Page404/Page404";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Hero /> },
        {
          path: 'courses',
          children: [
            { index: true, element: <Courses /> },
            {
              path: ':courseId', element: <Details />
            }
          ]
        },
        {
          path: '/learn/:courseId',
          element: <Learn />,
          children: [
            {
              path: 'chapter/:chapterId',
              element: <Chapter />
            }
          ]
        },
      ],
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
