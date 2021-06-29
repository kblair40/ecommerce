import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DarkMode from "./components/ComingSoon/DarkMode";
import Loading from "./Loading";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>

        <Route path="/profile" exact>
          <UserProfile />
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
        <Route path="*" exact>
          <Redirect to="/clothing" />
        </Route>
      </Switch>
      <DarkMode />
    </div>
  );
}

export default App;
