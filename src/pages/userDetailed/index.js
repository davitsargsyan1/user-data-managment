import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { useFirestoreConnect } from "react-redux-firebase";

import { Alert, Box, Button, CircularProgress } from "@mui/material";

import { addUserToCommunity } from "store/actions/users";
import Header from "components/header";
import UserInfo from "components/userInfo";

import "../styles.css";

const UserDetailed = () => {
  const { id: userId } = useParams();

  const [addedInCommunity, setAddedInCommunity] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useFirestoreConnect([{ collection: "community" }]);
  useFirestoreConnect([
    { collection: "users", doc: `${userId}`, storeAs: "user" + userId },
  ]);

  const user = useSelector((state) => state.firestore.data["user" + userId]);

  const communityUsers =
    useSelector((state) => state.firestore.data.community) || {};

  const handleClick = () => {
    dispatch(addUserToCommunity(user));
    setAddedInCommunity(!addedInCommunity);
  };

  const handleNavigateClick = () => {
    navigate("/community");
  };

  const isInCommunity = communityUsers[user?.id];

  const {
    id,
    url,
    type,
    login,
    avatar_url: avatarUrl,
    site_admin: siteAdmin,
  } = user || {};

  return (
    <>
      {user ? (
        <div className="wrapper">
          <div className="content">
            {addedInCommunity && (
              <Alert
                severity="success"
                onClose={() => setAddedInCommunity(!addedInCommunity)}
              >
                User is successfully added in Community!
              </Alert>
            )}
            <Header text={login} subText="Profile page" />
            <UserInfo
              id={id}
              url={url}
              type={type}
              login={login}
              siteAdmin={siteAdmin}
              avatarUrl={avatarUrl}
            />
            <div className="buttons">
              <Button
                variant="contained"
                onClick={handleClick}
                disabled={!!isInCommunity}
              >
                {isInCommunity ? "Added in Community" : "Add to community"}
              </Button>
              <Button variant="outlined" onClick={handleNavigateClick}>
                View Community
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={60} />
        </Box>
      )}
    </>
  );
};

export default UserDetailed;
