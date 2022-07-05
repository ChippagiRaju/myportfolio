import React from "react";
import { Col, Row } from "antd";
import Profile_Pic from "../../RJ.png";
import { Avatar, Image } from "antd";
import "./Navbar1.css";
// import { About, Education, Project } from "../../Main_Wrapper/RightPage"

export default function index() {
  return (
    <Row className="navBar">
      <Col span={8} offset={1} className="navBar_image">
        <div>
          <img src={Profile_Pic} height={"40px"} />
        </div>
      </Col>
      <Col span={4} offset={8}>
        <div className="navBar_Child">
       
          <div style={{ cursor: "pointer" }}> <a href="#About" target="_self">ABOUT</a></div>
          <div style={{ cursor: "pointer" }}> <a href="#Education" target="_self">EDUCATION</a></div>
          <div style={{ cursor: "pointer" }}> <a href="#Project" target="_self">PROJECT</a></div>

        </div>
      </Col>
    </Row>
  );
}
