import React from "react";
import "./App.module.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Greeting from "./components/Greeting/Greeting";
import ProjectList from "./components/ProjectList/ProjectList";
import SkillsList from "./components/SkillsList/SkillsList";
import Navbar from "./components/Navbar/Navbar";
import ContactBar from "./components/ContactBar/ContactBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faFolderOpen,
  faEnvelope,
  faCode,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHome, faFolderOpen, faEnvelope, faCode, faUserCircle);

const App = () => {
  return (
    <div>
      <Navbar />
      <ContactBar />
      <Greeting />
      <ProjectList />
      <SkillsList />
      <AboutMe />
    </div>
  );
};

export default App;
