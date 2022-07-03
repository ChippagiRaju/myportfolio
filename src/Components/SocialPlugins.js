import React, { Children } from "react";

export default function SocialPlugins(props) {
  return (
    <a target={props.target}>
      {/* <GithubOutlined style={{ fontSize: "2.4rem", color: "black" }} /> */}
      {/* {<Children {...props} />} */}
      {props.children}
    </a>
  );
}
