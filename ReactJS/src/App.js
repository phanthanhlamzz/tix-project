import './App.css';
import { BrowserRouter, Switch} from "react-router-dom";
import homeRoutesRender from'./routes/homeRoute';
function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        {homeRoutesRender()}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
