import * as React from 'react';
import './App.css';
import Header from './components/Header';
import ListPage from './containers/ListPage';

function App() {
  return (
    <div className="App">
      <Header title={"todo-list"}/>
      <ListPage/>
    </div>
  )
}

export default App;