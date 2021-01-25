
import {HomePage, NavBar, Login, QuoteGenerator, Counter, React, ImageSlider, FizzBuzz} from './articles';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

return (
  <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/quotes' component={QuoteGenerator}/>
      <Route path='/login' component={Login} />
      <Route path='/counter' component={Counter} />
      <Route path='/fizzbuzz' component={FizzBuzz} />
      <Route path='/images' component={ImageSlider} />
    </Switch>
  </>
  );
}

export default App;
