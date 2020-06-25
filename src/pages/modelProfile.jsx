import React, { useEffect, useState } from "react";
import Categories from "../components/home-page/Categories";
import Location from "../components/home-page/Location";
import Search from "../components/home-page/Search";
import ProfilesControl from "../components/model-profile/ProfilesControl";
import ModelProfileCard from "../components/model-profile/ModelProfileCard";
import {
	getAllPosts,
	getLocationsInfo,
	selectPostsPage,
	getPostComments,
	createPostComment,
	filterPosts,
	reportPost,
	showAlert,
	addToFavorites
} from "../redux/actions/actions";
import { connect } from "react-redux";
import { useRouter } from "next/router";

function ModelProfile(props) {
	const router = useRouter();

	useEffect(() => {
		props.getAllPosts();
		props.getLocationsInfo();
		props.getPostComments(router.query.id);
	}, []);

	return (
		<div>
			<Location states={props.states} />
			<Search />
			<Categories
				categories={props.categories}
				newPosts={props.newPosts}
				filterPosts={props.filterPosts}
			/>
			<ProfilesControl posts={props.posts} />
			<ModelProfileCard
				posts={props.posts}
				postComments={props.postComments}
				createPostComment={props.createPostComment}
				getAllPosts={props.getAllPosts}
				reportPost={props.reportPost}
				alert={props.alert}
				showAlert={props.showAlert}
				addToFavorites={props.addToFavorites}
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
		pagesNumber: state.app.pagesNumber,
		postComments: state.app.postComments,
		newPosts: state.app.newPosts,
		alert: state.app.alert
	};
};

const mapDispatchToPops = {
	getAllPosts,
	getLocationsInfo,
	selectPostsPage,
	getPostComments,
	createPostComment,
	filterPosts,
	reportPost,
	showAlert,
	addToFavorites
};

export default connect(mapStateToProps, mapDispatchToPops)(ModelProfile);
