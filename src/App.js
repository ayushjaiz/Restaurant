import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ProfileClass from "./components/ProfileClass";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Ayush Jaiswal",
        email: "support@ayush.com"
    })

    return (
        <>
            <UserContext.Provider
                value={{
                    user: user
                }}
            >
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Body /> },
            {
                path: "about", element: <About />,
                children: [{ path: "profile", element: <ProfileClass /> }]
            },
            { path: "contact", element: <Contact /> },
            { path: "restaurant/:resId", element: <RestaurantMenu /> },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                )
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);