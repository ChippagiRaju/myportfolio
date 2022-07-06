import React from "react";
import { Radio, Tabs, Row, Col, Tab, Tag, Progress } from "antd";
import {
  DiReact,
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiGithubBadge,
  DiGit,
} from "react-icons/di";
import { SiMicrosoftazure, SiTerraform, SiDocker } from "react-icons/si";
import SkillsComponent from "../../Components/SkillsComponent";
import "./SkillSet.css"
import Headers from "../../Components/Headers";

const { TabPane } = Tabs;

export default function SkillSet() {
  return (
    <>
      {/* <div className="Heading" style={{ color: "#334680" }}>
        <div style={{background:"linear-gradient(to left, #FF0000 0%, #000000 100%)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}} >SKILLS SET</div>
      </div> */}
      <Headers refid={"Skillset"} name={"SKILLS SET"}/>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={"small"}
        className="Right_Child"
      >
        <TabPane tab="Programming Languages" key="1">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <SkillsComponent
                language={"REACT"}
                languageColor={"#61dafb"}
                cardBackground={"#312643"}
                icon={
                  <DiReact style={{ fontSize: "2.4rem", color: "#61dafb" }} />
                }
                level={1}
                percentage={"80%"}
                // text={1}
              />
            </Col>
            <Col span={8}>
              <SkillsComponent
                language={"JavaScript"}
                languageColor={"black"}
                cardBackground={"yellow"}
                icon={
                  <DiJavascript1
                    style={{ fontSize: "2.4rem", color: "black" }}
                  />
                }
                level={1}
                percentage={"75%"}
              />
            </Col>
            <Col span={8}>
              <SkillsComponent
                language={"CSS"}
                languageColor={"#ffffff"}
                cardBackground={"#2965f1"}
                icon={<DiCss3 style={{ fontSize: "2.4rem", color: "white" }} />}
                level={2}
                percentage={"95%"}
              />
            </Col>
            <Col span={8}>
              <SkillsComponent
                language={"HTML5"}
                languageColor={"white"}
                cardBackground={"#f06529"}
                icon={
                  <DiHtml5 style={{ fontSize: "2.4rem", color: "white" }} />
                }
                level={2}
                percentage={"95%"}
              />
            </Col>
            <Col span={8}>
              <SkillsComponent
                language={"AzureCloud"}
                languageColor={"white"}
                cardBackground={"rgba(3, 198, 255, 0.71)"}
                icon={
                  <SiMicrosoftazure
                    style={{
                      fontSize: "2.4rem",
                      color: "white",
                    }}
                  />
                }
                level={0}
                percentage={"50%"}
              />
            </Col>

            <Col span={8}>
              <SkillsComponent
                language={"Terrafoam"}
                languageColor={"#2E71E5"}
                cardBackground={"#ffd7ee"}
                icon={
                  <SiTerraform
                    style={{
                      fontSize: "2.4rem",
                      color: "#2E71E5",
                    }}
                  />
                }
                level={0}
                percentage={"50%"}
              />
            </Col>

            <Col span={8}>
              <SkillsComponent
                language={"Docker"}
                languageColor={"#0db7ed"}
                cardBackground={"#ffd7ee"}
                icon={
                  <SiDocker
                    style={{
                      fontSize: "2.4rem",
                      color: "#2E71E5",
                    }}
                  />
                }
                level={0}
                percentage={"50%"}
              />
            </Col>
            <Col span={8}>
              <SkillsComponent
                language={"Git"}
                languageColor={"white"}
                cardBackground={"black"}
                icon={
                  <DiGit
                    style={{
                      fontSize: "2.4rem",
                      color: "white",
                    }}
                  />
                }
                level={1}
                percentage={"60%"}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Spoken Languages" key="2">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <SkillsComponent
                language={"English"}
                languageColor={"white"}
                cardBackground={"black"}
                level={3}
                percentage={"100%"}
                gr={{
                  background:
                    "linear-gradient(90deg, rgba(44,208,121,1) 0%, rgba(9,14,121,1) 37%)",
                }}
              />
            </Col>
            <Col span={8}>
              <SkillsComponent
                language={"TELUGU"}
                languageColor={"white"}
                cardBackground={"black"}
                level={3}
                percentage={"100%"}
                gr={{
                  background:
                    "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                }}
              />
            </Col>
            <Col span={8}>
              <SkillsComponent
                language={"KANNADA"}
                languageColor={"white"}
                cardBackground={"black"}
                level={4}
                percentage={"100%"}
                gr={{
                  background:
                    "linear-gradient(90deg, rgba(103,56,76,1) 0%, rgba(9,14,121,1) 31%, rgba(56,13,102,1) 43%)",
                }}
              />
            </Col>
            <Col span={8}>
              <SkillsComponent
                language={"HINDI"}
                languageColor={"white"}
                cardBackground={"black"}
                level={4}
                percentage={"100%"}
                gr={{
                  background:
                    "linear-gradient(90deg, rgba(231,230,41,1) 7%, rgba(121,56,9,1) 71%)",
                }}
              />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </>
  );
}
