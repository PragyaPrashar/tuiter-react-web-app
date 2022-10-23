import logo from './logo.svg';
import './App.css';
import Labs from "./labs/index.js";
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Explore from "./tuiter/explore";
import HomeScreen from "./tuiter/HomeScreen";



function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index
                         element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter/*"
                         element={<Tuiter/>}/>
              </Routes>

          </div>
      </BrowserRouter>
  );
}

export default App;
