import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DarkMode from "./components/ComingSoon/DarkMode";
import Loading from "./Loading";
import Auth from "./pages/Auth";
import LogoutSnackbar from "./components/Auth/LogoutSnackbar";
import { calculateRemainingTime } from "./helpers";
import { authActions } from "./store/authSlice";

function App() {
  const expirationTime = useSelector((st) => st.auth.expTime);
  const remainingTime = calculateRemainingTime(expirationTime);

  const isLoggedIn = useSelector((st) => st.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (isLoggedIn) {
        setTimeout(() => {
          dispatch(authActions.logout());
        }, remainingTime);
      }
    },
    // respond to changes in isLoggedIn
    [dispatch, isLoggedIn]
  );

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
      <LogoutSnackbar />
    </div>
  );
}

export default App;
