import { useCollection } from "react-firebase-hooks/firestore";
import db, { auth } from "../firebase";

import styled from "styled-components";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOptions from "./SidebarOptions";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { selectSterm } from "../features/appSlice";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const sTerm = useSelector(selectSterm);
  const [channels] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.email}
          </h3>
        </SidebarInfo>
      </SidebarHeader>
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title="Add channel" />

      {channels?.docs.map(
        (doc) =>
          doc.data().name.toLowerCase().includes(sTerm.toLowerCase()) && (
            <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
          )
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--main-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
