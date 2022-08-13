import { render } from "@testing-library/react";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Admin } from "./Components/Admin";
import Header from "./Components/Header";
import { Product } from "./Components/Product";
import { User } from "./Components/User";

// function App() {
//   return (
//     <div className="App">
//       this is home
//     </div>
//   );
// }
// export default App;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/user" component={User} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/admin" component={Admin} />
      </Router>
    )
  }
}
export default App;