import React from "react";
import "./Right_Child.css";
import { About, SkillSet, Project, Education } from "./Comps";

export default function index() {
  return (
    <div style={{marginTop:"80px",marginLeft:"40px"}}>
      <About />
      <SkillSet />
      <Project />
      <Education />
    
    </div>
  );
}
