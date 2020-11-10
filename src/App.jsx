import React from 'react'
import styles from './App.module.scss';
import AboutMe from '../src/components/AboutMe/AboutMe';
import Greeting from '../src/components/Greeting/Greeting';
import ProjectList from '../src/components/ProjectList/ProjectList';
import SkillsList from '../src/components/SkillsList/SkillsList';

const App = () => {
  return (
    <div>
      <Greeting />
      <ProjectList />
      <SkillsList />
      <AboutMe />
    </div>
  )
}

export default App

