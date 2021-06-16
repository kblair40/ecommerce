import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import Navbar from "./components/Navbar";
import Products from "./components/Products";

// TODO
// 1. When user clicks on product image, dialog should open with more details and
//  ability to add to cart
// 2.  When user clicks add to cart, snackbar should show up confirming success
// 3.  Implement Redux for dialog state and cart state
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
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default withStyles(styles)(App);
