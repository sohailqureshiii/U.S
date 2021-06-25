import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData, isUserLoggedIn } from "./actions";
import Myprofile from "./containers/MyProfile";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage/index";
import { updateCart } from "./actions/cart.action";
import CheckoutPage from "./containers/CheckoutPage";
import OrderDetailsPage from "./containers/OrdersPage";
import OrderPage from "./containers/OrdersPage";
import ExploreStore from "./containers/ExploreStore";
import ShopProfile from "./containers/newShopProfile";
import Favorite from "./containers/Fav";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); 

  
  useEffect(() => {
    dispatch(getInitialData());
  }, []);


  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ExploreStore" exact component={ExploreStore} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route path="/account/orders" exact component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route path="/myprofile" exact component={Myprofile} />
          <Route path="/:storeId/store" exact component={ShopProfile} />
          <Route path="/favorite" exact component={Favorite} />
          {/* <Route path="/UI" exact component={NewCategory} /> */}
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
