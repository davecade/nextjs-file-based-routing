import React from "react";
import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/event-list";

const HomePage = () => {
	const featuredEvents = getFeaturedEvents();
	return (
		<div>
			<EventList events={featuredEvents} />
		</div>
	);
};

export default HomePage;
