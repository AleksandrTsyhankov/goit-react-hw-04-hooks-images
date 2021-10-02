import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
import './App.css';
import Searchbar from './Searchbar/Searchbar';
import FetchAPI from './FetchAPI/FetchAPI';
injectStyle();

function App() {
  const [searchValue, setSearchValue] = useState('');

    return (
      <div className="App">
        <Searchbar onSubmit={setSearchValue}/>
        <FetchAPI searchValue={searchValue} />
        <ToastContainer />
      </div>
  );
  }


export default App;