import React from 'react';
import Menu from './components/Menu';
import Show from './components/Show';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Home page from APP component</h1>
        <Search />
        <Menu />
        <Show />
    </div>

  );
}

export default App;
