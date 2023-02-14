import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';
import Navbar from './components/Navbar';
import "./assets/styles/app.scss";

export function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}
