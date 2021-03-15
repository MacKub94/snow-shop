import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route exact path="/products/:id" children={<SingleProduct />} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
