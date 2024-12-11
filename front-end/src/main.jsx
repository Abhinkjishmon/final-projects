import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  AcadamicLanding,
  AccommodationView,
  AllProperty,
  CulturalIntergretion,
  DreamHomeLanding,
  Home,
  Jobboard,
  JobDescriptionPage,
  JobListings,
  JobPostingForm,
  Login,
  Register,
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
        element: <AcadamicLanding />,
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
