import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.scss";

const EventList = ({ events }) => {
	return (
		<ul className={classes.list}>
			{events.map((item) => (
				<EventItem item={item} />
			))}
		</ul>
	);
};

export default EventList;
