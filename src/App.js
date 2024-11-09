import './App.css'
import { Routes , Route} from 'react-router-dom';

import { Navbar } from './Navbar';
import {Landingpage} from "./landing/Landingpage";
import { Signin } from "./signin/Signin";
import { Login } from './login/Login';
// import { Order } from './order/Order';
import { Dashboard } from './dashboard/Dashboard';
import { Profile} from './profile/Profile';
import { Footer } from './footer/Footer';
import { Error404 } from './error/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './b2.svg'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="" element={<Landingpage/>}></Route>
          <Route path="/landingpage" element={<Landingpage/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          {/* <Route path="/order" element={<Order/>}></Route> */}
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path = "/*" element = {<Error404/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;