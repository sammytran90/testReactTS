import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './components/map.component/map.component';
import AddTodo from './components/AddTodo.test';
import VisibleTodoList from './components/VisibleTodoList.test';
import Footer from './components/footer.test';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <MapComponent></MapComponent> */}
      <AddTodo></AddTodo>
      <VisibleTodoList></VisibleTodoList>
      <Footer></Footer>
    </div>
  );
}

export default App;
