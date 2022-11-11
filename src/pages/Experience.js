import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import PhotoList from "../helpers/PhotoList";

import Exp1 from "../assets/image/exp1.png";
import Exp2 from "../assets/image/exp2.jpg";
import Exp3 from "../assets/image/exp3.png";
import Exp4 from "../assets/image/exp4.jpg";
import Exp5 from "../assets/image/exp5.jpg";

import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="04/2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <img src={Exp1} alt="Exp1" className="thumbnail" />
          <h3 className="vertical-timeline-element-title">
            Chingu - Work Collaboration Remote Community
          </h3>
          <p>
            <li>싱가폴 시간대의 다국적 개발자들과 함께 단기적으로 진행.</li>
            <li>
              에자일 방법론 중, Kanban 을 위주로 과정을 진행해 나가는 걸 선호.
            </li>
            <li>Discord를 통한 소통 진행 및 정보 공유.</li>
            <li>
              새로운 Stack 접목 시, (1)예시참조 (2)문서참조 (3)실험 (4) 적용
              순으로 진행.
            </li>

            <ol>
              <strong>Main Stacks:</strong>
            </ol>
            <ol>
              React.js, JavaScript, CSS, TypeScript, REST API 및, 그룹 구성에
              따라 여러 방식의 기술 접근이 발생함.
            </ol>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="07/2022 - 08/2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <img src={Exp2} alt="Exp2" className="thumbnail" />
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - Teampl100
          </h3>
          <p>
            <li>JavaScript, React.js, TypeScript</li>
            <li>
              React.js 와 JavaScript 와 같은 스크립트 파일들을 TypeScript 로
              변환하는 작업.
            </li>
            <li>
              React hooks (useState, useEffect) 를 활용한 ‘시간 지정에 따른,
              남은 시간 출력’ 기능 구현.
            </li>
            <li>
              PM 과의 소통 및 문서화 작업을 진행함으로써, 진행중인 프로젝트의
              작업 목표에서 벗어나지 않도록 예방.
            </li>
            <li>CI/CD pipeline 개념 숙지.</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img src={Exp3} alt="Exp3" className="thumbnail" />
          <h3 className="vertical-timeline-element-title">
            Web development - 독학
          </h3>
          <p>
            <li>July 2020 - present</li>
            <li>
              Udemy, Stackoverflow, discord, 공식 문서, 자료 구조, leetcode,
              CS50 강의 및 서적을 중심으로 개념 진행
            </li>
            <li>
              첫 시작은 Python 및 백엔드. 이 후, Front-end JavaScript 프로젝트
              위주로 개발.
            </li>
            <li>
              JavaScript 내 클래스, 프로토 타입, 배열 접목을 통한 리펙토링 및
              반복되는 코드 구성의 효율성 개선에 관심.
            </li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <img src={Exp4} alt="Exp4" className="thumbnail" />
          <h3 className="vertical-timeline-element-title">
            Accounting - ROK Aviation Forces
          </h3>
          <p>
            <li>Served for 2 years</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="07/2007 - 07/2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img src={Exp5} alt="Exp5" className="thumbnail" />
          <h3 className="vertical-timeline-element-title">
            Studied in overseas nation - Australia
          </h3>
          <p>
            <li>Grown and learnt under the culture of commonwealth.</li>
            <li>
              Knows and fluent in English(bilingual), Korean(native), Japanese
            </li>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
