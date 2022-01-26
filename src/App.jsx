import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MemeContainer from './Components/MemeContainer';
import MemesData from './Components/MemesData';
import Api from './Components/ApiContainer';

export default function App() {


  return (
    <div className="App">
      <Header />
      <div className='api--and--meme--container'>
        <Api />
        <MemeContainer />
      </div>
      
      <div className='contact--container'>
        <Contact 
           img= "https://i.ytimg.com/vi/QuIku8x2eLg/maxresdefault.jpg" 
           name= "Mr. Whiskerson"
           phone= "(212) 555-1234"
           mail= "mr.whiskaz@catnap.meow"
        />
        <Contact 
           img= "https://www.stutern.com/images/people/silas.png" 
           name= "Fluffykins"
           phone= "(212) 555-2345"
           mail= "fluff@me.com"
        />
        <Contact
           img= "https://www.stutern.com/images/people/chinonso-2.png" 
           name= "Felix"
           phone= "(212) 555-4567"
           mail= "thecat@hotmail.com"
        />
        <Contact 
           img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4u4VQxntqe2iDlA44cOXC9-wTnUhY68zbn9T78OCbaFxXbIeRnfAlAq11tXYSiz7lzT8&usqp=CAU" 
           name= "Pumpkin"
           phone= "(0800) CAT KING"
           mail= "pumpkin@scrimba.com"
        />
      </div>
      <Footer />
               
    </div>
  );
}




