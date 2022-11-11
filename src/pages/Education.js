import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web development : Self-learning
          </h3>
          <p>
            <li>Python 으로 시작해서, JavaScript 로 진행중.</li>
            <li>
              온라인 및 서적을 활용. freecodecamp, udemy, stackoverflow, youtube
              등, 각 스택별 제공하는 Document 및 Frontend roadmap을 기점으로
              심도있는 이해도 증진에 중점.
            </li>
            <li>
              자료 구조와 OOP를 중심, 그리고 CS50 강의를 토대로 CS지식의
              이해도를 높이는 중.
            </li>
            <li>
              매일 1문제. 알고리즘 문제를 반복해서 풀어보며 효율적 코드 구상에
              대한 감각을 익히는 중.
            </li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Queensland University of Technology - Economics, Bachelor degree
          </h3>
          <p>
            <li>Graduated in July 2017</li>{" "}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
