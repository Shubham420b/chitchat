import styled from "styled-components";

import ForumIcon from "@material-ui/icons/Forum";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";

const Login = () => {
  const handleSignin = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginBody>
        <ForumIcon style={{ fontSize: 100, color: "var(--main-color)" }} />
        <h1>Sign in to ChitChat</h1>
        <p>Inspired by Slack</p>
        <Button onClick={handleSignin} variant="contained">
          Continue with Google
        </Button>
      </LoginBody>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginBody = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > button {
    margin-top: 50px;
    background-color: var(--main-color) !important;
    color: white;
  }
`;
