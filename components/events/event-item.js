import Link from "next/link";
import React from "react";
import classes from "./event-item.module.scss";

const EventItem = ({ item }) => {
	const { title, image, date, location, id } = item;

	// to learn more about this below, go to:
	// MDN Date toLocaleDateString
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replace(", ", "\n");
	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<img src={"/" + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>TITLE</h2>
				</div>
				<div className={classes.date}>
					<time>{humanReadableDate}</time>
				</div>
				<div className={classes.address}>
					<address>{formattedAddress}</address>
				</div>
			</div>
			<div className={classes.actions}>
				<Link href={exploreLink}>Explore Event</Link>
			</div>
		</li>
	);
};

export default EventItem;
