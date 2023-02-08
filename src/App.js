import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Gallary from './Pages/Gallary';
import ContactUs from './Pages/ContactUs';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="AboutUs" element={<AboutUs />}></Route>
        <Route path="Gallary" element={<Gallary />}></Route>
        <Route path="ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
