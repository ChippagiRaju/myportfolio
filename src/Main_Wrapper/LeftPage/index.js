import React from "react";
import Profile_Pic from "../../c_raju.jpg";
import { Avatar, Divider } from "antd";
import "./LeftPage.css";
import { Col, Row } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { DiStackoverflow, } from "react-icons/di";
import SocialPlugins from "../../Components/SocialPlugins";
import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { FaDev } from "react-icons/fa";

export default function index() {
  return (
    <div className="LeftChild"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        src={Profile_Pic}
        size={170}
        shape={"square"}
        style={{
          width: "133px",
          height: "170px",
          lineHeight: "170px",
          fontSize: "18px",
          borderRadius: "84px",
        }}
      />
      <div>
        <Row style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <Col span={24}>
          CHIPPAGI RAJU
          </Col>
        </Row>
        <Row style={{ fontSize: "1.2rem" }}>
          <Col span={2}>

            <LinkedinOutlined />

          </Col>
          <Col span={20} offset={2}>
            {" "}
            <a target={"https://www.linkedin.com/in/rajuchippagi/"}>
              @rajuchippagi
            </a>
          </Col>
        </Row>
      </div>
      <Divider />

      <div style={{ fontSize: "1.2rem" }} >
        <Row justify="center" align="middle"><Col span={4}><SiGmail /></Col><Col span={20}>chippagiraju@gmail.com</Col></Row>
        <Row  justify="center" align="middle"><Col span={4}><MdCall /></Col><Col span={20}>+91-8008428444</Col></Row>
      </div>
      <Divider />
      <div>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            <SocialPlugins target="_blank">
              <a href="https://www.linkedin.com/in/chippagiraju/" target={"_blank"}>

                <LinkedinOutlined style={{ fontSize: "2.4rem" }} />
              </a>
            </SocialPlugins>
          </Col>
          <Col span={8}>
            <SocialPlugins target="_blank">
              <TwitterOutlined style={{ fontSize: "2.4rem" }} />
            </SocialPlugins>
          </Col>
          <Col span={8}>
            <SocialPlugins target="_blank">
              <FacebookOutlined style={{ fontSize: "2.4rem" }} />
            </SocialPlugins>
          </Col>
          <Col span={8}>
          <SocialPlugins target="_blank">
              <a href="https://dev.to/chippagiraju" target={"_blank"}>
                <FaDev style={{ fontSize: "2.4rem", color: "black" }} />
              </a>
            </SocialPlugins>
          </Col>

          <Col span={8}>
            <SocialPlugins target="_blank">
              <DiStackoverflow
                style={{ fontSize: "2.4rem", color: "orange" }}
              />
            </SocialPlugins>
          </Col>
         
          <Col span={8}>
            <SocialPlugins target="_blank">
              <a href="https://github.com/ChippagiRaju" target={"_blank"}>
                <GithubOutlined style={{ fontSize: "2.4rem", color: "black" }} />
              </a>
            </SocialPlugins>
          </Col>
        </Row>
      </div>
    </div>
  );
}
