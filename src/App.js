import './App.css';

import {BrowserRouter as Router  , Routes , Route} from 'react-router-dom'
import View from './components/View';
import Edit from './components/Edit';
import Add from './components/Add';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">


 <Router>

  <Routes>

    <Route exact  path='/' element={<Home/>}/>
    <Route exact  path='/add' element={<Add/>}/>
    <Route exact  path='/edit/:id' element={<Edit/>}/>
    <Route exact  path='/view/:id' element={<View/>}/>




  </Routes>
 </Router>

    </div>
  );
}

export default App;
