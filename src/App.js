import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import{
        BrowserRouter as Router,
        Switch,
        Route        
}from "react-router-dom"
function App() {
  return(
    <>
      <Router>
          <Switch>
              <Route exact path = "/">
                  <Home/>
              </Route>
          </Switch>
          <Switch>
              <Route path = "/login">
                  <Login/>
              </Route>
          </Switch>
          <Switch>
              <Route path = "/register">
                  <Register/>
              </Route>
          </Switch>
          <Switch>
              <Route path = "/profile">
                  <Profile/>
              </Route>
          </Switch>

      </Router>
    
    </>
  )
}

export default App;
