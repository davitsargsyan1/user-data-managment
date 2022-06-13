import { useEffect, useState } from "react";

import { Avatar, Typography } from "@mui/material";

const UserInfo = ({ id, login, url, avatarUrl }) => {
  const [detailedInfo, setDetailedInfo] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setDetailedInfo(response));
  }, [id, url]);

  const { name, company, bio, location, followers, following } = detailedInfo;

  return (
    <div className="user-block">
      <Avatar
        variant="square"
        sx={{ width: "160px", height: "160px", margin: "auto" }}
        src={`${avatarUrl}`}
      />
      <div className="info-block">
        <Typography mt={3} mb={2} align="left">
          <b>User ID:</b>
          {id ?? "No Data"}
        </Typography>
        <Typography mt={3} mb={2} align="left">
          <b>Name:</b>
          {name ?? "No Data"}
        </Typography>
        <Typography mt={3} mb={2} align="left">
          <b>Bio:</b>
          {bio ?? "No Data"}
        </Typography>
        <Typography mt={3} mb={2} align="left">
          <b>Location:</b>
          {location ?? "No Data"}
        </Typography>
        <Typography mt={3} mb={2} align="left">
          <b>Username:</b>
          {login ?? "No Data"}
        </Typography>
        <Typography mt={3} mb={2} align="left">
          <b>Company:</b>
          {company ?? "No Data"}
        </Typography>
        <Typography mt={3} mb={2} align="left">
          <b>Followers:</b>
          {followers ?? "No Data"}
        </Typography>
        <Typography mt={3} mb={2} align="left">
          <b>Following:</b>
          {following ?? "No Data"}
        </Typography>
      </div>
    </div>
  );
};

export default UserInfo;
