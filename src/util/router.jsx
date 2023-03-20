import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import ErrorPage from '../page/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    }
]);

function RouterProviderHoc() {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterProviderHoc;