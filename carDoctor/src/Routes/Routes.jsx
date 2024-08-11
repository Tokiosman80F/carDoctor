import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import BookingService from "../Pages/BookingService/BookingService";
import Booking from "../Pages/Booking/Booking";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "book/:id",
        element: (
          <PrivateRouter>
            <BookingService />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3002/service/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRouter>
            <Booking />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
