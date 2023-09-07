import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <SearchBooks/>
            },
            {
                path: '/saved',
                element: <SavedBooks/>,
            },
            
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)