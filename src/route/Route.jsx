import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../pages/Home/Home/Home'
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Flight from "../pages/Flight/Flight/Flight/Flight";
import AddFlight from "../pages/Dashboard/AddFlight/AddFlight";
import Bookings from "../pages/Bookings/Bookings/Bookings";
import Dashboard from "../layout/Dashboard";
import ViewFlight from "../pages/Dashboard/ViewFlight/ViewFlight";
import Users from "../pages/Dashboard/Users/Users";
import BookedFlight from "../pages/Dashboard/BookedFlight/BookedFlight";
import UpdateDetails from "../pages/Dashboard/UpdateDetails/UpdateDetails";
import PrivateRoute from "./PrivateRoute";
import PaymentAndMore from "../pages/Bookings/Payment/Payment/PaymentAndMore";
import MyBookings from "../pages/MyBookings/MyBookings/MyBookings";
import ViewDetails from "../components/ViewDetails";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/flight',
                element: <Flight></Flight>
            },
            {
                path: '/myBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/downloadPDF/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/specificBookedFlight/${params.id}`),
                element: <ViewDetails />
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        index: true,
                        element: <ViewFlight></ViewFlight>
                    },
                    {
                        path: 'viewFlight',
                        element: <ViewFlight></ViewFlight>
                    },
                    {
                        path: 'updateDetails/:id',
                        element: <UpdateDetails></UpdateDetails>,
                        loader: ({ params }) => fetch(`http://localhost:5000/getFlight/${params.id}`)
                    },
                    {
                        path: 'bookedFlight',
                        element: <BookedFlight></BookedFlight>
                    },
                    {
                        path: 'addFlight',
                        element: <AddFlight></AddFlight>
                    },
                    {
                        path: 'users',
                        element: <Users></Users>
                    }
                ]
            },
            {
                path: '/reviewBooking/:id',
                element: <Bookings></Bookings>,
                loader: ({ params }) => fetch(`http://localhost:5000/getFlight/${params.id}`)
            },
            {
                path: '/payments/:id',
                element: <PrivateRoute><PaymentAndMore></PaymentAndMore></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/getFlight/${params.id}`)
            }
        ]
    },
]);