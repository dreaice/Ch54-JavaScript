import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';

function App() {
  

  const myJSX = (
  < >
    <Navbar />
    <Home name="Lord Yorchmort" hogwartsHome="Hufflepuff"/>
    <Home name="Miss Naty" hogwartsHome="Slytherin"/>
    <Footer cohorte={54}/>
  </ >
);

return myJSX;

}



export default App
