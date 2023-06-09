import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route exact path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
