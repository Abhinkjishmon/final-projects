import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  Acadamic,
  AccommodationForm,
  AccommodationView,
  Aiassistant,
  AllProperty,
  Assignments,
  Chats,
  ClassRoom,
  CulturalIntergretion,
  DailyTask,
  DreamHomeLanding,
  Home,
  Jobboard,
  JobDescriptionPage,
  JobListings,
  JobPostingForm,
  LiveClass,
  Login,
  Profile,
  Register,
  Resources,
  VisaDetailsPage,
  VisaSolutionsLanding,
} from "./pages";
import { Footer, Header } from "./components/custom";
const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/find-job",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <Jobboard />,
      },
      {
        path: "job-lists",
        element: <JobListings />,
      },
      {
        path: "about-job",
        element: <JobDescriptionPage />,
      },
      {
        path: "creat-job",
        element: <JobPostingForm />,
      },
    ],
  },
  {
    path: "/find-accommodations",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <DreamHomeLanding />,
      },
      {
        path: "all-Property",
        element: <AllProperty />,
      },
      {
        path: "view-Property",
        element: <AccommodationView />,
      },
      {
        path: "new-accommodation",
        element: <AccommodationForm />,
      },
    ],
  },
  {
    path: "/acadamic",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <Acadamic />,
      },
      {
        path: "class-room",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <ClassRoom />,
          },
          {
            path: "resources",
            element: <Resources />,
          },
          {
            path: "live-class",
            element: <LiveClass />,
          },
          {
            path: "daily-task",
            element: <DailyTask />,
          },
          {
            path: "chats",
            element: <Chats />,
          },
          {
            path: "ai-assistant",
            element: <Aiassistant />,
          },
          {
            path: "assignments",
            element: <Assignments />,
          },
        ],
      },
    ],
  },
  {
    path: "/visaImmigrationAssistance",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <VisaSolutionsLanding />,
      },
      {
        path: "visa-detailsPage",
        element: <VisaDetailsPage />,
      },
    ],
  },
  {
    path: "/culturalIntergretion",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <CulturalIntergretion />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
