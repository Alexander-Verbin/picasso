import React from "react";
import { Routes, Route } from "react-router-dom";
import { PostPage } from "./pages/PostPage";
import { HomePage } from "./pages/HomePage";
import { Preloader } from "./components/Preloader";
import { useGetPostsQuery } from "./store/api/postsApi";

export const App: React.FC = () => {
	const { data = [], isLoading } = useGetPostsQuery();
	if (isLoading) return <Preloader />;
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage posts={data} />} />
				<Route path='/:id' element={<PostPage posts={data} />} />
			</Routes>
		</div>
	);
};
