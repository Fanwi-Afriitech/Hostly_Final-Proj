
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';


function App() {
  return (
    <div className="App">
     <Navbar/>
     
     <BrowserRouter>
     <Routes>
      
       <Route path="/home" element={<Homescreen />} />
       
       <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen/>} />
       <Route path="/login" element={<Loginscreen/>} />
       <Route path="/register" element={<Registerscreen/>} />
       <Route path="/profile" element={<Profilescreen/>} />
       <Route path="/admin" element={<Adminscreen/>} />
     </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
