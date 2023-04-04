import React from "react";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const Experiences = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="blue">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >        <h3 className="vertical-timeline-element-title">
            Shri Raghuvir madhymik Vidyalya
          </h3>
          <p>High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >        <h3 className="vertical-timeline-element-title">
            T.P Bhatia College of Science
          </h3>
          <p>Junior College</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Thakur College of Engineering and Technology
          </h3>
          <p>Bachelor of Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;
