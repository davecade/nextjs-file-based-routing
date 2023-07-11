import React from "react";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContext from "../../components/event-detail/event-content";
import { getEventById } from "../../data/dummy-data";

const EventsDetailsPage = () => {
	const router = useRouter();

	const eventId = router.query.id;

	const event = getEventById(eventId);

	if (!event) {
		return <p>No event found!</p>;
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContext>
				<p>{event.description}</p>
			</EventContext>
		</>
	);
};

export default EventsDetailsPage;
