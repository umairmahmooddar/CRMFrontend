import {Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Lesson from './components/Lesson'
import Quiz from './components/Quiz'


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Lesson} exact />
          <Route path="/r/:topic" component={Quiz} exact />
        </Switch>
    </Router>
  );
}

export default App