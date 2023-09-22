import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type PropsType = {
	title: string;
	text: string;
	id: number;
	userId: number;
};

export const Post: React.FC<PropsType> = ({ title, text, id, userId }) => {
	return (
		<div className={styles.post}>
			<p className='text'>
				Post Id: <b>{id}</b>
			</p>
			<p className='text'>
				User Id: <b>{userId}</b>
			</p>
			<div className={styles.post__title}>
				<p>Post title:</p>
				<h1 className='h1'>{title}</h1>
			</div>
			<p className='text'>
				Post text: <br />
				{text}
			</p>
			<Link className='link' to='/'>
				back
			</Link>
		</div>
	);
};
