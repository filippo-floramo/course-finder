import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateCourse from './pages/CreateCourse';
import Navbar from './components/Navbar';
import Universities from "./pages/Universities";
import CourseTypes from "./pages/CourseTypes";
import "./assets/styles/app.scss";

export function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-course' element={<CreateCourse />} />
        <Route path='/universities' element={<Universities />} />
        <Route path='/course-types' element={<CourseTypes />} />
      </Routes>
    </>
  );
}
