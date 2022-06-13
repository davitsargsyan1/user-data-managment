import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({ text, inHomePage, subText }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="header">
      {!inHomePage && (
        <ArrowBackIcon onClick={handleNavigate} sx={{ cursor: "pointer" }} />
      )}
      <div className="name">
        {subText && (
          <Typography mt={3} mb={2} color={"#000"} align="center" variant="h5">
            {subText}
          </Typography>
        )}
        <Typography mt={3} mb={2} color={"#1976d2"} align="center" variant="h3">
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default memo(Header);
