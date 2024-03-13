import './App.css';
import {Header} from "./Components/Header";
import Home from './Components/Home';
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom'
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import User from './Components/User';
function App() {
  return (
   <Router>

      <Header/>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/user/sad" element={<User />}/>
      <Route path="/user/:id" element={<User />}/>
      </Routes>

      <Footer/>
      
   </Router>
  );
}

export default App;
