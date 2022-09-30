import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

const Message = ({ message, timestamp, user, userId, userImage }) => {
  const [currentUser] = useAuthState(auth);

  return (
    <MessageContainer self={userId === currentUser.uid}>
      <img src={userImage} alt="user avatar" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-left: 10px;

  ${({ self }) => self && ` border-left: 8px solid var(--main-color); `}

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
