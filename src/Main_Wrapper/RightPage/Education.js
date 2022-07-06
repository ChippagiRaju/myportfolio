import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline, Row, Col } from "antd";
import "./Education.css";
import { FaSchool, FaArchway, IoSchoolSharp } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import Headers from "../../Components/Headers";

export default function Education() {
  return (
    <>
    {/* <div id="Education"> */}
      <div >
       {/* <div className="gre"> EDUCATION </div>
      </div> */}
      <Headers refid={"Education"} name={"EDUCATION"}/>
      <Row>
        <Col span={12} offset={4} style={{ fontSize: "2rem" }}>
          <Timeline mode="alternate" style={{ marginTop: "80px" }}>
            <Timeline.Item
              dot={<IoIosSchool style={{ fontSize: "1.4rem" }} />}
              position="right"
            >
              <div style={{ margin: "0px 10px " }}>
                Siddharth Institution of Engineering and Technology, 73%, 2017
              </div>
            </Timeline.Item>

            <Timeline.Item
              dot={
                <FaArchway style={{ fontSize: "1.4rem", color: "#1890ff" }} />
              }
              color="red"
              position="left"
            >
              <div style={{ margin: "0px 10px " }}>
                Vikram Junior College,88%,Passed out 2013
              </div>
            </Timeline.Item>

            <Timeline.Item></Timeline.Item>

            <Timeline.Item dot={<FaSchool style={{ fontSize: "1.4rem" }} />}>
              <div style={{ margin: "0px 10px " }}>
                Z.P (Boys) High School,88%,Passed out 2011
              </div>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
      </div>
    </>
  );
}
