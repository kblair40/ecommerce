import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./components/Navbar/";
import Products from "./components/Products/";
import DarkMode from "./misc/DarkMode/";
import Loading from "./misc/Loading/";
import { calculateRemainingTime } from "./utils/helpers";
import { authActions } from "./store/authSlice";

// PAGES
import Home from "./pages/Home/";
import Checkout from "./pages/Checkout/";
import Auth from "./pages/Auth/";
import UserProfile from "./pages/UserProfile/";

function App() {
  const expirationTime = useSelector((st) => st.auth.expTime);
  const remainingTime = calculateRemainingTime(expirationTime);
  const isLoggedIn = useSelector((st) => st.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        dispatch(authActions.logout());
      }, remainingTime);
    }
  }, [dispatch, isLoggedIn]);

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
        {isLoggedIn && (
          <Route path="/profile" exact>
            <UserProfile />
          </Route>
        )}

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
