import { Switch, Route } from "react-router-dom";
import Fade from "@material-ui/core/Fade";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DarkMode from "./components/ComingSoon/DarkMode";
import Loading from "./Loading";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>

        <Route path="/:category" exact>
          <Products />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/loading" exact>
          <Loading />
        </Route>
      </Switch>
      <DarkMode />
    </div>
  );
}

export default App;
