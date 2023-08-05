import Link from "next/link";
import classes from "./button.module.scss";

const Button = ({ link, onClick, children }) => {
	return link ? (
		<Link href={link}>
			<div className={classes.btn}>{children}</div>
		</Link>
	) : (
		<button className={classes.btn} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
