import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainPage from '../page/Main';
import ErrorPage from '../page/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    }
]);

function RouterProviderHoc() {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterProviderHoc;