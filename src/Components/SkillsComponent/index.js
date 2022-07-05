import React from "react";
import "./SkillsCom.css";
import { Radio, Tabs, Row, Col, Tab, Tag, Progress, Badge, Card } from "antd";
import { DiReact } from "react-icons/di";

export default function index({
  language,
  level,
  percentage,
  icon,
  cardBackground,
  languageColor,
  gr,
}) {
  const Levels = ["Beginner", "Intermediate", "Expert", "Fluent", "Good"];
  const LevelColors = ["grey", "orange", "green", "purple", "cyan"];
  return (
    <Badge.Ribbon text={Levels[level]} color={LevelColors[level]}>
    <div
      style={{
        // backgroundColor: "#312643",
        backgroundColor: cardBackground,
        borderRadius: "15px",
        padding: "15px",
        ...gr,
      }}
    >
      <Row align="middle">
        <Col span={2}>{icon}</Col>
        <Col span={9} offset={5}>
          <div
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              //   color: "#61dafb",
              color: languageColor,
            }}
          >
            {language}
          </div>
        </Col>
        <Col span={8}>
          {/* <Tag
            color={LevelColors[level]}
            style={{
              fontSize: "1rem",
              padding: "4px",
              borderRadius: "8px",
              textTransform: "uppercase",
            }}
          >
            {Levels[level]}
          </Tag> */}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Progress
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            showInfo={false}
            percent={parseInt(percentage)}
          />
        </Col>
      </Row>
    </div>
    </Badge.Ribbon>
  );
}
