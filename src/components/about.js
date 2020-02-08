import React from "react";
import Typography from "@material-ui/core/Typography";

export default function about(props) {
  return (
    <div className={props.about}>
      <Typography variant="body1" style={{ margin: "12px" }}>
        Hello, My name is Reet Pratayay and I'm an Electrical and Electronics
        Engineering graduate from MIT, Manipal (2017). I worked for TCS , India
        for two years in the domain of IT infrastructure as a system enginner.
        While working with TCS, my passion for building things grew over time,
        and I ventured into fullstack development leveraging the power of
        OpenSource and awesome online communities of developers worldwide. I've
        worked on numerous projects which have helped me build my skills and
        increased the slope of my learning curve. I'm intrested in disruptive
        technologies and their use cases in solving real world problems. I'm
        looking forward to hone my skills and applying them to solve complex
        business logics efiiciently.
      </Typography>
    </div>
  );
}
