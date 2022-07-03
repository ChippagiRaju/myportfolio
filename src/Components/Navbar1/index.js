import React from "react";
import { Col, Row } from "antd";
import Profile_Pic from "../../RJ.png";
import { Avatar, Image } from "antd";
import "./Navbar1.css";

export default function index() {
  return (
    <Row className="navBar">
      <Col span={8} offset={1} className="navBar_image">
        <div>
          <img src={Profile_Pic} height={"40px"} />
        </div>
      </Col>
      <Col span={6} offset={6}>
        <div className="navBar_Child">
          <div>HOME</div>
          <div>ABOUT</div>
          <div>EDUCATION</div>
          <div>PROJECT</div>
        </div>
      </Col>
    </Row>
  );
}
