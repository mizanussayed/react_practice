import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";
import HomePage from "./views/pages/HomePage"
import NotFoundPage from './views/pages/NotFoundPage';
import App from './app';
const AboutPage = lazy(() => import("./views/pages/AboutPage"));


export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="settings-and-privacy" element={<AboutPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Route>
  ),
);