
import './App.css';
import Home from './component/Home/Home';
import Navbar1 from './component/Navbar/Navbar1';
import FavList from './component/FavList/FavList';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
   <>
   <Navbar1/>
   <Routes>
     <Route path='/' exact element={<Home/>} />
     <Route path='/favorite' exact element={<FavList/>} />
   </Routes>
   
   </>
  );
}

export default App;
