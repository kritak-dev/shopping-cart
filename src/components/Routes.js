import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar/index';
import Home from "./Home";
import ProductList from "./ProductList/ProductList";

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/products">
                    <ProductList isCartOpen={false} />
                </Route>
                <Route path="/cart">
                    <ProductList isCartOpen={true} />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;