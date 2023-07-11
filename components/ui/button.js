import Link from "next/link";
import classes from "./button.module.scss";

const Button = ({ link, children }) => {
	return (
		<Link href={link}>
			<div className={classes.btn}>{children}</div>
		</Link>
	);
};

export default Button;
