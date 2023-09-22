import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type PropsType = {
	title: string;
	text: string;
	id: number;
};

export const PostItem: React.FC<PropsType> = ({ title, text, id }) => {
	return (
		<li className={styles.list__item}>
			<h2 className='h2'>
				{id} {title}
			</h2>
			<p className={`${styles.list__text} text`}>{text}</p>
			<Link className='link' to={`/${id}`}>
				read more
			</Link>
		</li>
	);
};
