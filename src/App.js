import React from 'react';
import './App.css';


//imprtar formularios
import Links from './components/Links';
//import LinksForm from './components/LinksForm';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   
<div className="container p-4">
  <div className="row">
    <Links/>
  </div>
  <ToastContainer/>
</div>
  );
}

export default App;
