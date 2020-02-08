import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import wallpaper from "./wallpaper.png";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import Divider from "@material-ui/core/Divider";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Contact from "@material-ui/icons/PermContactCalendarRounded";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import PhoneIcon from "@material-ui/icons/PhoneAndroidRounded";
import MailIcon from "@material-ui/icons/MailOutlineRounded";
import Drawer from "@material-ui/core/Drawer";
import Project from "./components/projects";
import SideList from "./components/listitems";
import MenuIcon from "@material-ui/icons/Menu";
import About from "./components/about";
import Certi from "./components/certi";

const useStyle = makeStyles(theme => ({
  app: {
    backgroundImage: `url(${wallpaper})`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    fontFamily: "Gloria Hallelujah",
    position: "relative",
    flexFlow: "column wrap"
  },

  mainbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  linkbox: {
    width: 100,
    display: "flex",
    position: "absolute",
    margin: 10,
    marginRight: 30,
    padding: 10,
    top: 0,
    right: 0,
    justifyContent: "space-around"
  },

  titlebox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },

  titlelink: {
    display: "flex",

    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    width: 120
  },

  profiledetails: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "Column",
    alignItems: "flex-start",
    position: "absolute",
    margin: 10,
    paddingTop: 100,
    padding: 10,
    bottom: 0,
    right: 0,
    height: 105,
    float: "top"
  },
  contactbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: "10px",

    width: 200
  },
  contactboxitem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 100
  },

  list: {
    width: 200,
    paddingTop: 120
  },
  projectbox: {
    display: "flex",
    padding: "8px",
    flexDirection: "column",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [drawerState, setDrawerState] = React.useState(false);
  const [openProject, setOpenProject] = React.useState(false);
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openCerti, setOpenCerti] = React.useState(false);

  const toggleDrawer = value => {
    setDrawerState(!drawerState);
  };
  const handleClose = value => {
    setOpen(false);
  };
  const handleClickOpen = value => {
    setOpen(true);
  };
  const openProjectDialog = () => {
    setOpenProject(!openProject);
  };

  const toggleAboutDialog = () => {
    setOpenAbout(!openAbout);
  };
  const toggleCertiDialog = () => {
    setOpenCerti(!openCerti);
  };

  return (
    <div className={classes.app}>
      {/* <Box className={classes.mainbox}> */}

      <Drawer open={drawerState} onClose={toggleDrawer}>
        <SideList
          sidelist={classes.list}
          projectDialog={openProjectDialog}
          aboutDialog={toggleAboutDialog}
          certiDialog={toggleCertiDialog}
        ></SideList>
      </Drawer>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          margin: 10,
          marginLeft: 20,
          padding: 10,
          paddingTop: 25
        }}
      >
        <MenuIcon style={{ fontSize: 30 }} />
      </IconButton>
      <Dialog open={openProject} onClose={openProjectDialog}>
        <Project project={classes.projectbox}></Project>
      </Dialog>
      <Dialog open={openAbout} onClose={toggleAboutDialog}>
        <About about={classes.projectbox}></About>
      </Dialog>
      <Dialog open={openCerti} onClose={toggleCertiDialog}>
        <Certi about={classes.projectbox}></Certi>
      </Dialog>

      <div className={classes.titlebox}>
        <Typography
          variant="h1"
          style={{
            color: "white",
            marginLeft: "25px",
            fontFamily: "Gloria Hallelujah",
            fontWeight: 1000,
            fontSize: 50
          }}
        >
          Hello, I'm Reet!
        </Typography>
        <div className={classes.titlelink}>
          <Link color="inherit" href="https://www.github.com/reetp1dev">
            <GitHubIcon style={{ fontSize: 30 }} />
          </Link>
          <Link color="inherit" href="https://www.linkedin.com/in/reetp1/">
            <LinkedInIcon style={{ fontSize: 30 }} />
          </Link>
          <Link color="inherit" href="https://www.fb.com/reetp1">
            <FacebookIcon style={{ fontSize: 30 }} />
          </Link>
        </div>
      </div>
      {/* </Box> */}
      <div className={classes.linkbox}>
        <IconButton color="inherit">
          <HomeRoundedIcon style={{ fontSize: 30 }} />
        </IconButton>
        <IconButton color="inherit" onClick={handleClickOpen}>
          <Contact style={{ fontSize: 30 }} />
        </IconButton>
      </div>
      <Box className={classes.profiledetails}>
        <Typography
          variant="h4"
          // color="textSecondary"
          style={{ fontFamily: "Gloria Hallelujah", fontWeight: "500px" }}
        >
          UI/UX Engineer
        </Typography>
        <Divider></Divider>

        <Typography
          variant="h4"
          // color="textSecondary"
          style={{ fontFamily: "Gloria Hallelujah" }}
        >
          FullStack Developer
        </Typography>
        <Divider></Divider>
        <Typography
          variant="h4"
          // color="textSecondary"
          style={{ fontFamily: "Gloria Hallelujah" }}
        >
          System Engineer
        </Typography>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around"
          }}
        >
          Contact me at
          <Box className={classes.contactbox}>
            <PhoneIcon style={{ fontSize: 30 }} />
            <Typography>+91-9265712854</Typography>
          </Box>
          <Box className={classes.contactbox}>
            <MailIcon style={{ fontSize: 30 }} />
            <Typography>reet.p14@gmail.com</Typography>
          </Box>
        </DialogTitle>
      </Dialog>
    </div>
  );
}

export default App;
