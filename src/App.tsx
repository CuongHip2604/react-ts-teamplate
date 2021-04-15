import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "./router/history";
import Loading from "./shared/components/loading";
import { RootState } from "./store";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./modules/auth/pages/Login"));
const Register = React.lazy(() => import("./modules/auth/pages/Register"));
const TheContent = React.lazy(() => import("./shared/containers/TheContent"));

function App() {
  const isLoading = useSelector((state: RootState) => state.root.loading);

  const handleRedirect = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return false;
    return true;
  };

  return (
    <div className="App">
      <Router history={history}>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => {
                return handleRedirect() ? (
                  <Redirect to="/" />
                ) : (
                  <Login {...props} />
                );
              }}
            />
            <Route
              exact
              path="/register"
              render={(props) => {
                return handleRedirect() ? (
                  <Redirect to="/" />
                ) : (
                  <Register {...props} />
                );
              }}
            />
            <Route
              path="/"
              render={(props) => {
                return handleRedirect() ? (
                  <TheContent {...props} />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
          </Switch>
        </React.Suspense>
      </Router>
      <Loading loading={isLoading} />
      <ToastContainer />
    </div>
  );
}

export default App;
