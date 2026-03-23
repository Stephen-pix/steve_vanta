import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GetProductComponent from './components/GetProductComponent';
import AddProductComponent from './components/AddProductComponent';
import SignUpComponent from './components/SignUpComponent';
import SignInComponent from './components/SignInComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import MakePaymentComponent from './components/MakePaymentComponent';


function App() {
 
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <div className="hero-header text-center">
               <h1 className="hero-title">Vanta</h1>
                 <p className="hero-subtitle">Satisfy your hunger through us</p>
            </div>
          </header>

          <Routes>
            <Route path='/' element={<GetProductComponent/>} />
            <Route path='/addproduct' element={<AddProductComponent/>} />
            <Route path='/signup' element={<SignUpComponent/>} />
            <Route path='/signin' element={<SignInComponent/>} />
            <Route path='/makepayment' element={<MakePaymentComponent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
