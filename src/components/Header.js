import styled from "styled-components";

import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setSterm } from "../features/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const handleSearch = (e) => {
    dispatch(setSterm({ sTerm: e.target.value }));
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar src={user?.photoURL} alt={user?.displayName} />
        <Tooltip title="Sign Out" arrow>
          <ExitToAppIcon onClick={() => auth.signOut()} />
        </Tooltip>
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="search channel" onChange={handleSearch} />
      </HeaderSearch>
      <HeaderRight>
        <Tooltip
          title={`You are currently logged in as ${user?.displayName}`}
          arrow
        >
          <InfoIcon />
        </Tooltip>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--main-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-right: 20px;
    margin-left: auto;
    cursor: pointer;
  }
`;
