import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

const router = createBrowserRouter([{
    path: '/', element: <Main />, children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/profile', element: <Profile /> },
        { path: '/courses', element: <Courses /> },
        { path: '/blog', element: <Blog /> },
        { path: '/frequently-asked-question', element: <Faq /> },
    ]
}])
export default router;