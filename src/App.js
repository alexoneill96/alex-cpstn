import "./App.css";
import Create from "./components/Create/Create";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div></div>
        <div>
          <Route exact path="/" component={Create} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
