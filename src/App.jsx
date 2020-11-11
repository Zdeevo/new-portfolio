import React from 'react'
import styles from './App.module.scss';
import AboutMe from '../src/components/AboutMe/AboutMe';
import Greeting from '../src/components/Greeting/Greeting';
import ProjectList from '../src/components/ProjectList/ProjectList';
import SkillsList from '../src/components/SkillsList/SkillsList';
import Navbar from '../src/components/Navbar/Navbar';
import ContactBar from "./components/ContactBar/ContactBar";

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
  )
}

export default App

