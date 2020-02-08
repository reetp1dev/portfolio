import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default function projects(props) {
  console.log(props);

  return (
    <div className={props.project}>
      <Typography variant="h5" style={{ color: "#3ba2df", margin: "8px" }}>
        Noteefy!
      </Typography>
      <Typography variant="body1">
        {" "}
        -A simple note management app created using React.js and Material-UI.{" "}
        <br />
        -Completely based on frontend tech, data is persisted only in browser.
        <br />
        -Lets user add/edit note.
        <br />
        -Lets user add filter and search notes based on the filters.
        <br />
        Firebase Link:{" "}
        <a href="https://noteefy.firebaseapp.com"> noteefy.firebase.app</a>
      </Typography>
      <Divider style={{ marginTop: "8px" }} />
      <Typography
        variant="h5"
        style={{
          color: "#3ba2df",
          margin: "8px"
        }}
      >
        VOICE
      </Typography>
      <Typography variant="body1">
        {" "}
        -A real time hand gesture to voice interpreter.
        <br />
        -Used arduino to map flex sensors data onto discreet level.
        <br />
        -Created digital moving average filter to reduce noises in analog
        signal.
        <br />
        -Used image processing to detect seperation between fingers.
        <br />
      </Typography>
    </div>
  );
}
