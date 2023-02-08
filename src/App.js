import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutPage';
import Gallary from './Pages/Gallary';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutUs />
      <Gallary />
      <ContactUs />
    </>
  );
}

export default App;
