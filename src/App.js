import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "./shared-components/Loader.jsx";
const Navbar = lazy(() => import("./shared-components/Navbar"));
const Home = lazy(() => import("./pages/home/Home.jsx"));
const Info = lazy(() => import("./pages/info/Info.jsx"));
const Message = lazy(() => import("./pages/messages/Message.jsx"));

const App = () => {
  const routes = (
    <Router>
      <ToastContainer newestOnTop />
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/info/:userId" exact element={<Info />} />
        <Route path="/messages" exact element={<Message />} />
        <Route path="*" exact element={<Home />} />
      </Routes>
    </Router>
  );
  return <Suspense fallback={<Loader asOverlay={true} />}>{routes}</Suspense>;
};

export default App;
