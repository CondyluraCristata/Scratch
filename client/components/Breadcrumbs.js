import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});


export default function CustomizedBreadcrumbs() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
};

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          label="Log in"
          icon={<HomeIcon fontSize="small" />}
          onClick={() => handleClick("/signin")}
        />
        <StyledBreadcrumb
          component="a"
          label="Sign up"
          onClick={() => handleClick("/signup")}
        />
        <StyledBreadcrumb label="Team" />
      </Breadcrumbs>
    </div>
  );
}