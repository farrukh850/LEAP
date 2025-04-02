import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import SuccessStories from "../pages/SuccessStories/SuccessStories";
import SingleStory from "../pages/SingleStory/SingleStory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "success-stories",
        element: <SuccessStories />
      },
      {
        path: "single-story",
        element: <SingleStory />
      },
      {
        path: "/stories/:id",
        element: <SingleStory />
      }
    ]
  }
]);