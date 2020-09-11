import React from "react";
import "./App.css";
import Products from "./Container/Products/Products";
import MainLayout from "./Layout/MainLayout/MainLayout";
import ProductDetail from "./Container/ProductDetail/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            path="/products"
            render={() => {
              return (
                <MainLayout>
                  <Products />
                </MainLayout>
              );
            }}
          />
          <Route
            path="/product-detail/:id"
            render={() => {
              return (
                <MainLayout>
                  <ProductDetail />
                </MainLayout>
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
