import React, { useEffect } from "react";
import Location from "../components/home-page/Location";
import Search from "../components/home-page/Search";
import Categories from "../components/home-page/Categories";
import EscortContent from "../components/home-page/EscortContent";
import { connect } from "react-redux";
import {
	getAllPosts,
	getLocationsInfo,
	getNewPosts,
	selectPostsPage,
	filterPosts,
} from "../redux/actions/actions";

function Home({
	categories,
	getAllPosts,
	posts,
	getLocationsInfo,
	states,
	getNewPosts,
	newPosts,
	pagesNumber,
	selectPostsPage,
	filterPosts,
	availability,
	available_to,
	ethnicity,
	eyes,
	hair,
	affiliation
}) {
	useEffect(() => {
		getAllPosts();
		getLocationsInfo();
		getNewPosts();
	}, []);

	return (
		<div>
			<Location states={states} />
			<Search />
			<Categories
				categories={categories}
				newPosts={newPosts}
				filterPosts={filterPosts}
			/>
			<EscortContent
				posts={posts}
				pagesNumber={pagesNumber}
				selectPostsPage={selectPostsPage}
				availability={availability}
				available_to={available_to}
				ethnicity={ethnicity}
				eyes={eyes}
				hair={hair}
				affiliation={affiliation}
				filterPosts={filterPosts}
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
		categories: state.app.categories,
		posts: state.app.posts,
		states: state.app.states,
		newPosts: state.app.newPosts,
		pagesNumber: state.app.pagesNumber,
		availability: state.app.availability,
		available_to: state.app.available_to,
		ethnicity: state.app.ethnicity,
		eyes: state.app.eyes,
		hair: state.app.hair,
		affiliation: state.app.affiliation
	};
};

const mapDispatchToPops = {
	getAllPosts,
	getLocationsInfo,
	getNewPosts,
	selectPostsPage,
	filterPosts,
};

export default connect(mapStateToProps, mapDispatchToPops)(Home);
