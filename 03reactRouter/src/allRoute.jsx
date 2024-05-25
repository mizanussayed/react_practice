import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import User from "./components/User";
import GitHub , {githubDataLoader} from "./components/Github";

export const allRoute = createBrowserRouter(
  //[
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       { path: "", element: <Home /> },
  //       { path: "about", element: <About /> },
  //       { path: "contact", element: <ContactUs /> },
  //     ],
  //   },
  // ]
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="github" element={<GitHub />} loader={githubDataLoader} />
    </Route>
  ),
);
