import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './components/map.component/map.component';
import AddTodo from './components/AddTodo.test';
import VisibleTodoList from './components/VisibleTodoList.test';
import Footer from './components/footer.test';
import Header from './components/header.component/header.component';
import todoPage from './components/doto.test/todoPage.test';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './containers/privateRoute.container/privateRoute.container';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route exact path="/" component={MapComponent}></Route>
        <PrivateRoute path="/todoTest" Component={todoPage}></PrivateRoute>
        {/* <MapComponent></MapComponent> */}
        {/* <AddTodo></AddTodo>
<VisibleTodoList></VisibleTodoList>
<Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;
