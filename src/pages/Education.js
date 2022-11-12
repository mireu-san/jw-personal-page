import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

import Edu1 from "../assets/image/edu1.jpg";
import Edu2 from "../assets/image/qut.jpg";

import "../styles/Education.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img src={Edu1} alt="Edu1" className="smallImg" />
          <h3 className="vertical-timeline-element-title">
            Web development : Self-learning
          </h3>
          <p>
            <li>
              온라인 및 서적을 활용. freecodecamp, udemy, stackoverflow, youtube
              등으로 실습을 해 보는 과정에서, 공식 Document 들을 참고 해 보며,
              기능 구현을 통한 각 스택 및 언어별 이해도 증진에 중점.
            </li>
            <li>
              자료 구조와 OOP, 그리고 네트워크 지식을 기본으로 두고 알고리즘
              이론 및 풀이 연습을 진행.
            </li>
            <li>
              Brute force 방식으로 for/while loop 문을 이용한 제한적인 leetcode
              문제 해결 연습을 진행.
            </li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img src={Edu2} alt="uni logo" className="smallImg2" />
          <h3 className="vertical-timeline-element-title">
            Queensland University of Technology - Economics, Bachelor degree
          </h3>
          <p>
            <li>Intermediate macroeconomics</li>
            <li>Intermediate microeconomics</li>
            <li>Game theory and applications</li>
            <li>Contemporary application of economic theory (capstone unit)</li>
            <li>Environmental economics and policy</li>
            <li>International economics</li>
            <li>Financial Accounting</li>
            <li>Business Law and Ethics</li>
            <li>Economics for the real world</li>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
