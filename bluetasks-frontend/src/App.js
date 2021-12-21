import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskForm from './components/TaskForm';
import TaskListTable from './components/TaskListTable';

class App extends Component {
  //constructor(props){
  //super(props)
  //}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container" style={{ marginTop: 20 }}>
            <Routes>
              <Route exact path="/form" element={<TaskForm/>} />
              <Route path="/" element={<TaskListTable/>} />

            </Routes>

          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

