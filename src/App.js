import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import Navbar from "./components/Navbar";
// import Accessories from "./pages/Accessories";
// import Clothing from "./pages/Clothing";
// import Electronics from "./pages/Electronics";
// import Jewelry from "./pages/Jewelry";
import Home from "./pages/Home";
import Products from "./components/Products";

const styles = {
  homeLink: {
    textDecoration: "none",
    position: "relative",
    bottom: "1rem",
    left: "90%",
    color: "#888",
    marginRight: "1rem",
    "&:hover": {
      textDecoration: "none",
      color: "#121212",
    },
    "&:visited": {
      textDecoration: "none",
      color: "#888",
    },
  },
};

function App({ classes }) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/:category">
          <Products />
        </Route>
        {/* <Route path="/accessories">
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
        </Route> */}
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default withStyles(styles)(App);
