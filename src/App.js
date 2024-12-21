import './App.css'
import { Routes , Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Landingpage} from "./components/Landingpage";
import { Signin } from "./components/Signin";
import { Login } from './components/Login';
import { Order } from './components/Order';
import { Dashboard } from './components/Dashboard';
import { Profile} from './components/Profile';
import { Footer } from './components/Footer';
import { Error404 } from './components/Error404';
import { Developers } from './components/Developers';
import { Caterar } from './components/Caterar';
import { Cart } from './components/Cart';
import { CartOrder } from './pages/CartOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import './b2.svg'
import { PlaceOrder } from './pages/PlaceOrder';
import { Dish } from './components/Dish';
function App() {
  return (
    <div className="App">
        
        <Navbar/>
        <Routes>
          <Route path="" element={<Landingpage/>}></Route>
          <Route path="/landingpage" element={<Landingpage/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path = "/*" element = {<Error404/>}></Route>
          <Route path='/developer' element={<Developers/>}></Route>
          <Route path='/caterar' element={<Caterar/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/cartorder' element={<CartOrder/>}></Route>
          <Route path='/payamount' element={<PlaceOrder/>}></Route>
          <Route path='/dish' element={<Dish/>} ></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;