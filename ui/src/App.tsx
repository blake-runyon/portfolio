import { Menubar } from 'primereact/menubar'
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import MenuLinks  from './models/MenuLinks'
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


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
    </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App;
