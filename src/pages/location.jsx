import React, { useEffect, useState } from "react";
import Location from "../components/home-page/Location";
import Search from "../components/home-page/Search";
import Categories from "../components/home-page/Categories";
import LocationPageControl from "../components/location-page/LocPageControl";
import LocHorCarousel from "../components/location-page/LocHorCarousel";
import LocVertCarousel from "../components/location-page/LocVertCarousel";
import LocPageFoot from "../components/location-page/LocPageFoot";
import { connect } from "react-redux";
import Router from 'next/router';
import { getAllPosts, getNewPosts, filterPosts, addToFavorites, getCities, getAppInfo } from '../redux/actions/actions'

function LocationPage(props) {

  useEffect(() => {
    props.getCities(Router.query.id);
    props.getAllPosts();
    props.getNewPosts();
    props.getAppInfo();
  }, []);

  return (
    <div>
      <Location states={props.states}
        filterPosts={props.filterPosts}
        getCities={props.getCities} />
      <Search />
      <Categories
        categories={props.categories}
        newPosts={props.newPosts}
        filterPosts={props.filterPosts}
      />
      <LocationPageControl
        cities={props.cities}
        filterPosts={props.filterPosts}
        availability={props.availability}
        available_to={props.available_to}
        ethnicity={props.ethnicity}
        affiliation={props.affiliation}
        filterPosts={props.filterPosts}
        eyes={props.eyes}
        hair={props.hair}
      />
      <LocHorCarousel posts={props.posts}
        addToFavorites={props.addToFavorites} />
      <LocVertCarousel posts={props.posts}
        addToFavorites={props.addToFavorites} />
      <LocPageFoot filterPosts={props.filterPosts} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    states: state.app.states,
    categories: state.app.categories,
    cities: state.app.cities,
    posts: state.app.posts,
    newPosts: state.app.newPosts,
    availability: state.app.availability,
    available_to: state.app.available_to,
    ethnicity: state.app.ethnicity,
    eyes: state.app.eyes,
    hair: state.app.hair,
    affiliation: state.app.affiliation
  }
}

const mapDispatchToProps = {
    getCities, getAllPosts, getNewPosts, filterPosts, addToFavorites, getAppInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
