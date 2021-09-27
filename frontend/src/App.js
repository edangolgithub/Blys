import Verification from "./Verification";
import Success from "./Success";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Verification />
          </Route>
          <Route path="/success">
            <Success  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
