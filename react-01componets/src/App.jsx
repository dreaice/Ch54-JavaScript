import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';

function App() {
  

  const myJSX = (
  < >
    <Navbar />
    <Home />
  
    <Footer />
  </ >
);

return myJSX;

}



export default App
