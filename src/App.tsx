import './App.css';
import GlobalNavigation from "./GlobalNavigation";
import Home from './view/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateBot from './view/CreateBot';
import BotConfiguration from './view/BotConfiguration';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
       <GlobalNavigation />
       <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create-bot">
            <CreateBot />
          </Route>
          <Route path="/bot-configuration">
            <BotConfiguration />
          </Route>
        </Switch>
        </Router>
        </QueryClientProvider>
    </div>
  );
}

export default App;
