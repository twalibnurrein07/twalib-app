import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {ErrorBoundary} from 'react-error-boundary'
import FallBack from "./components/FallBack";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  SharedLayout,
  Products,
  SingleProduct,
  Error,
  NavbarComponent,
} from "./components";

const LazyAbout = React.lazy(() => {
  return import("./components/About");
});

function App() {

  const handleError = (error,info)=>{
   console.log(`LOGGING ${error} , ${info}`)
  }

  return (
    <div className="App">
     
      <Router>
      <ErrorBoundary fallback={<FallBack/>} onError={handleError}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading..</div>}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="/products" element={<SharedLayout />}>
            <Route index element={<Products />} />
            <Route path="/products/:productCategory" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
