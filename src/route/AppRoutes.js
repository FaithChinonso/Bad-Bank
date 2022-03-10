import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Navigation from "../Components/NavBarBoot";
import LandingPage from "../View/LandingPage";
import Withdraw from "../View/Withdraw";
import Footer from "../Components/Footer";
import Deposit from "../View/Deposit";
import AllData from "../View/AllData";
import CreateAccount from "../View/CreateAccount";

export default function AppRoutes() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/allData" element={<AllData />} />
        {/* <Route exact path="/">
          <LandingPage />
        </Route> */}
        {/* <Route exact path="/createAccount">
          <CreateAccount />
        </Route> */}
        {/* <Route exact path="/withdraw">
          <Withdraw />
        </Route> */}
        {/* <Route exact path="/allData">
          <AllData />
        </Route> */}
        {/* <Route exact path="/deposit">
          <Deposit />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}
