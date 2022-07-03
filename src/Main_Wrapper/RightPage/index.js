import React from "react";
import "./Right_Child.css";
import { About, SkillSet, Project, Education } from "./Comps";

export default function index() {
  return (
    <div>
      <About />
      <SkillSet />
      <Project />
      <Education />
    </div>
  );
}
