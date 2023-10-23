
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header"
import Home from "./componentes/Home"
import About from "./componentes/About"
import Courses from "./componentes/Courses";
import Contact from "./componentes/Contact"
import Maincontent from "./componentes/Maincontent";
import Booknow from "./componentes/Booknow";
import Footer from "./componentes/Footer";
import ErrorPage404 from "./componentes/ErrorPage404";
//styles link import
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/about.scss"
import "./styles/OurCourse.scss"
import "./styles/CourseCategory.scss"
import "./styles/maincontent.scss"
import "./styles/OurInstructor.scss"
import "./styles/task.scss"
import "./styles/booknow.scss"
import "./styles/footer.scss"
import "./styles/courses.scss"
import "./styles/fullcourses.scss"
import "./styles/errorPage404.scss"

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/Maincontent" element={<Maincontent />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
