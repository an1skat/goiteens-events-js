import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { BoardTitle } from "./styles/BoardTitle";
import { PageBoard } from "./components/PageBoard";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://an1skat.github.io/goiteens-events-js/upcoming-events.json")
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  return (
    <>
      <GlobalStyle />
      <BoardTitle>24th Core Worlds Coalition Conference</BoardTitle>
      <PageBoard events={events} />
    </>
  );
}

export default App;
