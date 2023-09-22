import React from "react";
import { PostItem } from "../components/PostItem";
import { apiResponse, apiResponsePostItem } from "../types";
import styles from "../components/PostItem/styles.module.scss";
type PropsType = {
	posts: apiResponse<apiResponsePostItem>;
};

export const HomePage: React.FC<PropsType> = ({ posts }) => {
	return (
		<div className='container'>
			<ul className={styles.list}>
				{posts.map((post) => (
					<PostItem
						key={post.id}
						title={post.title}
						text={post.body}
						id={post.id}
					/>
				))}
			</ul>
		</div>
	);
};
