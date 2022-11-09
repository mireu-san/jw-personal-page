import { styled } from "@material-ui/core";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-VerticalTimelineComponent/styled.min.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline>
        <VerticalTimelineElement></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
