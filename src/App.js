import "./App.css";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";
import Feedback from "./pages/Feedback";
import CattoEyes from "./pages/CattoEyes";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/tasks" Component={Tasks} />
      <Route path="/mainpage" Component={Projects} />
      <Route path="/details" Component={Details} />
      <Route path="/feedback" Component={Feedback} />
      <Route path="/cattoeyes" Component={CattoEyes} />
      <Route path="/profile" Component={Profile} />
    </Routes>
  );
}

export default App;
