import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Checkout from "../pages/CheckOut/Checkout";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services/Services";
import Login from "../pages/Login/Login";
import Orders from "../pages/Orders/Orders";
import Signup from "../pages/SignUp/Signup";
import PrivateRouter from "./PrivateRoutes/PrivateRouter";

const router = createBrowserRouter([
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
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter>,
                loader: ({ params }) => fetch(`hhttps://y-three-ebon.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRouter><Orders></Orders></PrivateRouter>
            }
        ]
    },
])

export default router;