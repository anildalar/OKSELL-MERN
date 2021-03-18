import React from 'react'
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

/**
* @author
* @function App
**/

const App = (props) => {
  return(
     <Router>
         <Switch>
                <Route path="/" exact component={Home} ></Route>
                <Route path="/signin" component={ Signin }></Route>
                <Route path="/signup" component={ Signup }></Route>
         </Switch>
     </Router>
   )

 }

export default App