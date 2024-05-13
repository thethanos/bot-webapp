import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";

import './index.css';
import { theme } from "./theme";
import App from './App';
import Gallery from './pages/gallery/Gallery';
import ErrorElement from './components/ErrorElement';
import { loadNextPage } from './pages/gallery/loadNextPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "bot-webapp/gallery",
                element: <Gallery />,
                loader: ({request}) => {
                    const params = new URLSearchParams(request.url);
                    const cityId = params.get("city_id");
                    const serviceId = params.get("service_id");
                    return loadNextPage(0, cityId, serviceId);
                }
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
                <App />
        </ThemeProvider>
    </React.StrictMode>
);
