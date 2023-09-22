import React from "react";
import { useParams } from "react-router-dom";
import { apiResponse, apiResponsePostItem } from "../types";
import { Post } from "../components/Post";

type PropsType = {
	posts: apiResponse<apiResponsePostItem>;
};

export const PostPage: React.FC<PropsType> = ({ posts }) => {
	const { id } = useParams();
	const post = posts.find(
		(item: apiResponsePostItem) => String(item.id) === id
	);
	return (
		<div className='container'>
			{post ? (
				<Post
					userId={post.userId}
					id={post.id}
					title={post.title}
					text={post.body}
				/>
			) : (
				<p>пост не найдет</p>
			)}
		</div>
	);
};
