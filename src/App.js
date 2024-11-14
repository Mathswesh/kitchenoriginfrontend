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
import 'bootstrap/dist/css/bootstrap.min.css';
import './b2.svg'
function App() {
  return (
    <div className="App">
        <div class="relative h-full w-full bg-neutral-900">
          <div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]">
          </div>
        </div>
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
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;