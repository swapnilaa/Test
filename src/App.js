import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import User from './component/User';
import Tasks from './component/Tasks';
import Home from './component/Home';
import Login from './component/Login';
import { BrowserRouter } from 'react-router-dom';
import Notfound from './component/Notfound';
function App() {
  return (
    <div>
  
  <BrowserRouter>
    <Switch>
      
      <Route path='/tasks' component={Tasks}/>
      <Route path='/user' component={User}/>
      <Route path='/home' component={Home}/>      
      <Route path='/'exact component={Login}/>
      <Route path='/' component={Notfound}/>      
            
      <Redirect to={Notfound }/>
      </Switch>  
      </BrowserRouter>  
    </div>
  );
}

export default App;
/* */
//<Route path='/' exact component={Login}/>      