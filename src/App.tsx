import "./App.css";
import GlobalNavigation from "./GlobalNavigation";
import Home from "./view/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BotConfiguration from "./view/BotConfiguration";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
            <Route path="/bot-configuration">
              <BotConfiguration />
            </Route>
          </Switch>
        </Router>
        <ToastContainer
          style={{ fontSize: "0.875em", minWidth: "30em" }}
          position="top-center"
          hideProgressBar={true}
          theme="light"
        />
      </QueryClientProvider>
    </div>
  );
}
export default App;
