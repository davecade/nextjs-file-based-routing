import React from "react";
import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const EventsPage = () => {
	const events = getAllEvents();

	return (
		<div>
			<EventsSearch />
			<EventList events={events} />
		</div>
	);
};

export default EventsPage;
