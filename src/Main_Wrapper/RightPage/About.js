import React from "react";
import Headers from "../../Components/Headers";

export default function About() {
  return (
    <div  >
      {/* <h1 style={{ fontWeight: "bold" }} className="gr">ABOUT ME</h1> */}
      <Headers refid={"About"} name={"ABOUT ME"} />
      <h2 style={{ width: "70%" }}>
        To pursue a challenging and an exciting career in an industry, where I
        can leverage my skills to grow along with the company while being
        resourceful, innovative and flexible.
      </h2>
    </div>
  );
}
