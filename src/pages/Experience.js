import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="04/2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Chingu - Work Collaboration Remote Community
          </h3>
          <p>
            <li>싱가폴 시간대에 거주중인 개발자들과 함께 단기적으로 진행.</li>
            <li>
              코드 구성 및 사용 할 라이브러리에 대한 계획의 중요성에 대한 이해.
            </li>
            <li>Kanban management 및 Discord를 통한 간략한 문서화.</li>
            <li>
              사전 계획 및 팀원간의 이해도 동기화를 통한 효율적인 작업 경험에
              무게.
            </li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="07/2022 - 08/2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
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
          icon={<WorkIcon />}
        >
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
