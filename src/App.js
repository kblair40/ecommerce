import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DarkMode from "./components/ComingSoon/DarkMode";

// TODO
// 1.  When user clicks add to cart, snackbar should show up confirming success
// 2.  Add 'No items in cart' message if user clicks cart while nothing is in their cart
// 3.  Add checkout window to left of cart (smaller screens go below) with price total
//        including tax and a button to checkout
// 4.  Add checkout form where user can input name, address, phone #,
// 5.  Improve transitions between pages
//      - fade
//      - loaders should display while content is loading
// 6.  Move all styles to separate styles directory and import relevant styles from each component
// 7.  Navbar should collapse to hamburger menu dropdown on small screens
// 8.  Fix image sizing on products pages, especially for jewelry
// 9.  Better form validations!!!
// 10. Add same images to homepage, but with various dimensions and display image depending on user's screen size
//        ^^ https://cloudfour.com/thinks/responsive-images-101-definitions/
// 11. Add filter for gender on Clothing page

// EVENTUALLY
// 1.  Put available products into firebase and load from there
// 2.  Add ability for user to create account and login
//      - User should be able to add products to their favorites
//      - User should be able to rate products

const styles = {};

console.log("app running");

function App({ classes }) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/:category" exact>
          <Products />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <DarkMode />
    </div>
  );
}

export default withStyles(styles)(App);
