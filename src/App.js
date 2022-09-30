import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import styled from "styled-components";

import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Loader from "./components/pinwheel.gif";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <img src={Loader} alt="loading gif" />
      </AppLoading>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        {user ? (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;

  > img {
    height: 100px;
  }
`;
