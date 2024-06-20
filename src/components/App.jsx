import { PageTitle } from "components/PageTitle/PageTitle";
import { EventBoard } from "components/EventBoard/EventBoard";
import upcoingEvent from "../upcoming-event.json";

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcoingEvent} />
    </>
  );
};
