import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/create' element={<CreateProduct/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
