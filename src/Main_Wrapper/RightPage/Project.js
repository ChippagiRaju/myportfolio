import React from "react";
import { Col, Row, Avatar, Tag, Badge, Divider } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Project() {
  return (
    <>
    <div id="ss2">
      <div className="Heading" style={{ color: "#334680", marginTop: "10px" }}>
        PROJECT
      </div>

      <div
        style={{
          backgroundColor: "#f6f6f6",
          padding: "10px",
          borderRadius: "12px",
        }}
      >
        <Row>
          <Col span={20}>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                backgroundColor: "white",
                padding: "2px",
              }}
            >
              COOLING ROOM WITH PCM
            </h1>
          </Col>
        </Row>
        <Row>
          <Col span={6} style={{ backgroundColor: "white" }}>
            <Row
              // gutter={[8, 8]}
              style={{ padding: "15px" }}
              justify="center"
              // align="middle"
            >
              <Col span={8}>
                <Avatar
                  size={42}
                  icon={<UserOutlined />}
                  style={{ marginLeft: "25%" }}
                />
              </Col>
              <Col span={8}></Col>
              <Col span={8}>
                <Avatar
                  size={42}
                  icon={<UserOutlined />}
                  style={{ marginLeft: "25%" }}
                />
              </Col>

              <Col span={8}></Col>
              <Col span={8}>
                <Row gutter={[16, 8]}>
                  <Col span={24}>
                    {" "}
                    <Avatar
                      size={64}
                      // icon={<UserOutlined />}
                      style={{ marginLeft: "20%" }}
                    >
                      ME
                    </Avatar>
                  </Col>
                  <Col span={24}>
                    <Tag color="processing" style={{ fontSize: "1rem" }}>
                      TEAM LEAD
                    </Tag>
                  </Col>
                </Row>
              </Col>
              <Col span={8}></Col>

              <Col span={8}>
                <Avatar
                  size={42}
                  icon={<UserOutlined />}
                  style={{ marginLeft: "25%" }}
                />
              </Col>
              <Col span={8}></Col>
              <Col span={8}>
                <Avatar
                  size={42}
                  icon={<UserOutlined />}
                  style={{ marginLeft: "25%" }}
                />
              </Col>
            </Row>
            <Row justify="middle">
              <Col span={24}>
                <Badge count={5} offset={[0, 0]}>
                  <Tag color="cyan" style={{ padding: "5px" }}>
                    TEAM <TeamOutlined style={{ fontSize: "1.1rem" }} />
                  </Tag>
                </Badge>
              </Col>
            </Row>
          </Col>
          <Col span={14} style={{ backgroundColor: "white" }}>
            <Row>
              <Col
                style={{
                  backgroundColor: "white",
                  fontSize: "1.2rem",
                }}
              >
                <Divider orientation="left">
                  <Tag color="magenta">DESCRIPTION</Tag>
                </Divider>
                Several methods of air cooling in room are in practice. Recent
                developments are in progress to make effective cooling by
                eliminating conventional energies. One such method is effective
                cooling of room by using phase change material. In this project
                we used phase change material for providing coolness for
                enclosed area like room.
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Divider orientation="right">
                  <Tag color="magenta">PROJECT DURATION</Tag>
                </Divider>
              </Col>
            </Row>
            <Row
              gutter={[16, 8]}
              style={{ padding: "4px" }}
              justify="space-between"
              align="middle"
            >
              <Col
                span={2}
                style={{
                  backgroundColor: "#83a0a0",
                  padding: "4px",
                  fontWeight: "bold",
                  color: "whitesmoke",
                }}
              >
                FROM
              </Col>
              <Col span={6}>
                <Row>
                  <Col>
                    {" "}
                    <CalendarOutlined />
                  </Col>
                  <Col style={{ marginLeft: "4px" }}>Nov 2016</Col>
                </Row>
              </Col>
              <Col
                span={1}
                style={{
                  backgroundColor: "#a3c9a8",
                  padding: "4px",
                  fontWeight: "bold",
                  color: "whitesmoke",
                }}
              >
                To
              </Col>
              <Col span={6}>
                <Row>
                  <Col>
                    <CalendarOutlined />
                  </Col>
                  <Col style={{ marginLeft: "4px" }}>Jun 2017</Col>
                </Row>
              </Col>
              <Col
                span={3}
                style={{
                  backgroundColor: "#bca0bc",
                  padding: "4px",
                  fontWeight: "bold",
                  color: "whitesmoke",
                }}
              >
                Duration
              </Col>
              <Col span={6}>
                <Row>
                  <Col>
                    <ClockCircleOutlined />
                  </Col>
                  <Col style={{ marginLeft: "4px" }}>7 Months</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      </div>
    </>
  );
}
