import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Form from './Form';

import DataTable from './DataTable';


import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <BrowserRouter>

<Routes>

  <Route path="/" element={<Form/>}></Route>

  <Route path="/Datatable" element={<DataTable/>}></Route>

</Routes >

</BrowserRouter>
    </div>
  );
}

export default App;
