import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserLists/UserList";
console.log(UserList);

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserList} />
          </Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
