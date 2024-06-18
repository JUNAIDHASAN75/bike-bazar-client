import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/DashBoard/Dashboard";
import UserReviewAdd from "../Pages/DashBoard/UserReview/UserReviewAdd";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                
            }
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:'/dashboard/reviews_add',
                element: <UserReviewAdd></UserReviewAdd>
            }
        ]
    }
]);