import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../Blog/Blog";
import CourseDetails from "../CourseDetails/CourseDetails";
import AllCourses from "../Courses/AllCourses/AllCourses";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import PremiumAccess from "../PremiumAccessPremiumAccess/PremiumAccess";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([{
    path: '/', element: <Main />, children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/profile', element: <Profile /> },
        {
            path: '/courses', element: <Courses />,
            children:
                [
                    {
                        path: '/courses',
                        loader: () => fetch('http://localhost:5000/courses'), element: <AllCourses />
                    },
                    {
                        path: '/courses/category/:categoryName',
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.categoryName}`), element: <AllCourses />
                    }
                ]
        },
        { path: '/course/:id', loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`), element: <CourseDetails />, },
        { path: '/blog', element: <Blog /> },
        { path: '/frequently-asked-question', element: <Faq /> },
        { path: '/premium-access/:id', loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`), element: <PrivateRoutes><PremiumAccess /></PrivateRoutes> },
    ]
}])
export default router;