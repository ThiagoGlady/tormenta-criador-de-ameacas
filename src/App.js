import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SheetRandom from "./pages/SheetRandom";

function App() {
  return (
    <Switch>
      <Route exact path="/sheet/random" component={ SheetRandom } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}

export default App;
