import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectSection';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Header ></Header>
      <LandingSection />
      <ProjectsSection></ProjectsSection>
      <Form></Form>
    </div>
  );
}

export default App;
