import Home from './Components/Home.js/Home.js';
import Navs from './Components/Navs/Navs.js';
import Reviews from './Components/reviews/reviews.js';
import FAQ from './Components/FAQ/faq.js';
import Baked from './Components/Baked/Baked.js';
import Form from './Components/Form/Form.js';
import Footer from './Components/Footer/Footer.js';

import './App.css';

function App() {
  return (
    <>
    <Navs/>
    <Home/>
    <Reviews/>
    <FAQ/>
    <Baked/>
    <Form/>
    <Footer/>
    </>
  );
}

export default App;
