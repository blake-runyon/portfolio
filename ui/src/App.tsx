import { Menubar } from 'primereact/menubar'
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css'
import MenuLinks  from './models/MenuLinks'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import { ScrollTop } from 'primereact/scrolltop'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Academics from './components/Academics';
import Contact from './components/Contact';


const App = () => {
  const items = MenuLinks;
  return (
    <>
    <div className="wrapper">
      <Menubar 
        model={items}
      />
    </div>
    
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/skills' element={<Skills />}></Route>
      <Route path='/academics' element={<Academics />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>

  <ScrollTop  threshold={100}/>
    </>
  )
}

export default App;
