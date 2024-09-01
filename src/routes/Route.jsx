import { useRoutes } from "react-router-dom"
import CreatePage from "../components/CreatePage/CreatePage.jsx";
import ViewPage from "../components/ViewPage/ViewPage.jsx";
import ViewRaw from "../components/ViewRaw/ViewRaw.jsx";
import AuthCallback from "../components/AuthCallback/AuthCallback.jsx";
import Shares from "../components/Shares/Shares.jsx";

const Route = () => {
    return useRoutes([
        {path: '/', element: <CreatePage/>},
        // View the page, /"urlCode" 
        {path: '/:urlCode', element: <ViewPage/>},
        {path:"/raw/:urlCode", element: <ViewRaw/>},

        { path: '/auth/callback', element: <AuthCallback /> },

        {path: "/shares", element: <Shares/>}
    ]);
}

export default Route;