import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";
import CantinasPage from "./pages/cantinas";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/cantinas" component={CantinasPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
