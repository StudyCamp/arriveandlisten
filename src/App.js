import { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  // '_nBlN9yp9R8'
  const [url, setUrl] = useState('KOrDEkYqbCc')

  

  return (
    <Router>
      <div className="App">
        <Navbar 
          handleClickHome={value => setUrl(value)}/>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home url={ url }/>
            </Route>
            {/* <Route path="/create">
              <Create />
            </Route>
            <Route path="/cities/:id">
              <CityDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
