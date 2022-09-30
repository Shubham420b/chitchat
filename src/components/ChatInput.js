import { useState } from "react";
import firebase from "firebase/app";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import db, { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        userId: user?.uid,
        user: user?.displayName,
        userImage: user?.photoURL,
      });
    }
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          placeholder={
            channelName ? `Message #${channelName}` : `select channel`
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
