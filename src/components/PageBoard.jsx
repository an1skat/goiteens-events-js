import PropTypes from "prop-types";
import { Event } from "./Event";
import { EventsContainer } from "./PageBoardStyles";

PageBoard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export function PageBoard({ events }) {
  return (
    <EventsContainer>
      {events.map((event, idx) => (
        <Event
          key={idx}
          name={event.name}
          start={event.time.start}
          end={event.time.end}
          location={event.location}
          speaker={event.speaker}
        />
      ))}
    </EventsContainer>
  );
}
