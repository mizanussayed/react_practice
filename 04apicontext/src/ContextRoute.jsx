import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from "./Layout"
import ContextLayout1 from "./components/ContextLayout1"
import ThemeLayout from "./components/themeComponents/ThemeLayout"



export const ContextRoute = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<ContextLayout1 />} />
            <Route path="theme" element={< ThemeLayout />} />
        </Route>
    )
)