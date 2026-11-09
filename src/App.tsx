import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import MyCourse from "./pages/Course/[id]/page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:id" element={<MyCourse />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
