import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DarkMode from "./components/ComingSoon/DarkMode";
import Loading from "./Loading";

// COLORS:
// Success: #5dca36
// error: #ff4244
// Others - aqua spring: #effaf6, elm: #1d6d86, black: #0c0c0d, grey: #a0a1a1, piston blue: #4ebeef, copper: #af8536, brown/sepia: #6c3510

// TODO
// 3.  Add checkout window to left of cart (smaller screens go below) with price total
//       including tax and a button to checkout
// 5.  Improve transitions between pages
//      - fade    - loaders should display while content is loading
// 6.  Move all styles to separate styles directory and import relevant styles from each component
// 8.  Fix image sizing on products pages, especially for jewelry
// 9.  Better form validations!!!
// 11. Add filter for gender on Clothing page
// 12. Submit Order button on checkout page, when tabbed to has a weird background effect.  Look into and fix.
// 13. Snackbar should transition from bottom-up
// 14. Remove console.logs in redux store
// 15. 'View Gallery' on home page should (temporarily) re-direct to clothing
// 16. Change title in index.html to "E-Commerce" or something simlar
// EVENTUALLY
// 1.  Put available products into firebase and load from there
// 2.  Add ability for user to create account and login
//      - User should be able to rate products and add products to their favorites

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
