import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Divider from "@material-ui/core/Divider";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import List from "@material-ui/core/List";
import resumePdf from "../_resumeReet_updated.pdf";
import Typography from "@material-ui/core/Typography";

export default function sideList(props) {
  function handleProjectDialog() {
    console.log("click");
    props.projectDialog();
  }
  function handleAboutClick() {
    props.aboutDialog();
  }
  function handleCertiClick() {
    props.certiDialog();
  }
  return (
    <List className={props.sidelist}>
      <div>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <NoteOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="body1">
            <a
              style={{ color: "black", textDecoration: "none" }}
              href={resumePdf}
              download
            >
              Resume
            </a>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem button onClick={handleProjectDialog}>
          <ListItemIcon>
            <DashboardIcon fontSize="large" />
          </ListItemIcon>

          <ListItemText primary="Projects" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleCertiClick}>
          <ListItemIcon>
            <DescriptionOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Certifications" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleAboutClick}>
          <ListItemIcon>
            <InfoOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <Divider />
      </div>
    </List>
  );
}
