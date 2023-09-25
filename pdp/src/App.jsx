import { render } from "solid-js/web";

import "./index.scss";
import 'remixicon/fonts/remixicon.css';

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";
import { Route, Router, Routes } from '@solidjs/router';

const App = () => (
  <>
    <Router>
      <div class="text-3xl mx-auto max-w-6xl">
        <Header name='Product Detail'/>
        <Routes>
          <Route path='/product/:id' component={PDPContent} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </>
);
render(App, document.getElementById("app"));
