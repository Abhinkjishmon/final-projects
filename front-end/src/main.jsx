import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  Acadamic,
  AccommodationForm,
  AccommodationView,
  Accommodtions,
  Aiassistant,
  AllProperty,
  ApplicationsManager,
  Assignments,
  Blogs,
  Chats,
  ClassRoom,
  ClassRoomInfo,
  CulturalIntergretion,
  DailyTask,
  DreamHomeLanding,
  EditProfile,
  Home,
  Jobboard,
  JobDescriptionPage,
  JobListings,
  JobPostingForm,
  Jobs,
  LiveClass,
  Login,
  Notifications,
  Profile,
  Register,
  Resources,
  VisaDetailsPage,
  VisaSolutionsLanding,
} from "./pages";
import { Footer, Header, ProtectedRoute } from "./components/custom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/store";



const route = createBrowserRouter([
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Header />
        <Home />
        <Footer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile/:id",
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "jobs",
        element: (
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "",
            element: <Jobs />,
          },
          {
            path: "applications",
            element: <ApplicationsManager />,
          },
        ],
      },
      {
        path: "accommodtions",
        element: <Accommodtions />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "classRoom-Info",
        element: <ClassRoomInfo />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },

  {
    path: "/find-job",
    element: (
      <ProtectedRoute>
        <Header />
        <Outlet />
        <Footer />
      </ProtectedRoute>
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
        path: "about-job/:jobId",
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
      <ProtectedRoute>
        <Header />
        <Outlet />
        <Footer />
      </ProtectedRoute>
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
        path: "view-Property/:id",
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
      <ProtectedRoute>
        <Header />
        <Outlet />
        <Footer />
      </ProtectedRoute>
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
      <ProtectedRoute>
        <Header />
        <Outlet />
        <Footer />
      </ProtectedRoute>
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
      <ProtectedRoute>
        <Header />
        <Outlet />
        <Footer />
      </ProtectedRoute>
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
    <Provider store={store}>
      <RouterProvider router={route}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </Provider>
  </StrictMode>
);
