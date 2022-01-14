import './App.css';
import Signin from './img';
import './assets/css/style.css';
import './assets/vendor/animate.css/animate.min.css'
import "./assets/vendor/aos/aos.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/glightbox/css/glightbox.min.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import Navbar from './navbar';
import HomePage from './img';
import Contact from './contact';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
