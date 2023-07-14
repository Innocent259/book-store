import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookApp from './Components/BookApp';
import Navbar from './Components/Navbar';
import Categories from './Components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookApp />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
