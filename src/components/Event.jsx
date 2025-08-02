import PropTypes from "prop-types";
import { EventWrapper, Row, IconWrapper } from "./EventStyles";
import {
  MdLocationOn,
  MdPerson,
  MdCalendarMonth,
  MdAccessTime,
} from "react-icons/md";

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
};

export function Event({ name, start, end, location, speaker }) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const durationHrs = Math.round((endDate - startDate) / (1000 * 60 * 60));

  return (
    <EventWrapper>
      <b>{name}</b>
      <Row>
        <IconWrapper>
          <MdLocationOn />
        </IconWrapper>
        <span>{location}</span>
      </Row>
      <Row>
        <IconWrapper>
          <MdPerson />
        </IconWrapper>
        <span>{speaker}</span>
      </Row>
      <Row>
        <IconWrapper>
          <MdCalendarMonth />
        </IconWrapper>
        <span>
          {startDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
          ,{" "}
          {startDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </Row>
      <Row>
        <IconWrapper>
          <MdAccessTime />
        </IconWrapper>
        <span>
          {durationHrs} {durationHrs === 1 ? "hour" : "hours"}
        </span>
      </Row>
    </EventWrapper>
  );
}
