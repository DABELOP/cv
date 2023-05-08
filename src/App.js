import 'bootstrap/dist/css/bootstrap.min.css';
import './components/animations.css'
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import PersonalDescription from './components/PersonalDescription';
import MyServices from './components/MyServices'
import FixedBanner from './components/FixedBanner';
import ProjectsCarousel from './components/ProjectsCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <NavBar/>
        <MainContainer/>
        <PersonalDescription/>
        <hr/>
        <MyServices/>
        <FixedBanner/>
        <ProjectsCarousel/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
