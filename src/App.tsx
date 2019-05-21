import * as React from 'react';
import { Route } from 'react-router-dom';
import { TodosComponent } from './todos/todos';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">Todo App</Typography>
          </Toolbar>
        </AppBar>
 
        <Route exact path="/" component={TodosComponent} />
        <Route path="/add" component={AddElement} />
      </div>
    );
  }
}

function AddElement() {
  return <h1>Add todo item</h1>
}

export default App;
