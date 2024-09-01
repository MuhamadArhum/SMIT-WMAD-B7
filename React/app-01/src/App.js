import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banners from'./components/Banners';
import ServicesExperience from'./components/Experience';
import Projects from "./components/Projects";
import Footer from './components/Footer';
function App() {
  return (
    <>
 <Header/>
 <Banners/>
 <ServicesExperience/>
 <Projects />
 <Footer/>
    </>
  );
}

export default App;