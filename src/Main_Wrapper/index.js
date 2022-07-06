import React from "react";
import { Col, Row } from "antd";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

export default function index() {
  return (
   
    <Row style={{ width: "90%", marginLeft: "100px" }}>
      <Col span={5}>
        <LeftPage />
      </Col>
      <Col span={16} offset={1}>
        <RightPage />
      </Col>
    </Row>
   
  );
}
