import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Accessories from "./pages/Accessories";
import Clothing from "./pages/Clothing";
import Electronics from "./pages/Electronics";
import Jewelry from "./pages/Jewelry";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/accessories">
          <Accessories />
        </Route>
        <Route path="/clothing">
          <Clothing />
        </Route>
        <Route path="/electronics">
          <Electronics />
        </Route>
        <Route path="/jewelry">
          <Jewelry />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
