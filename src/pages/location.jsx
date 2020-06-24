import React, { useEffect, useState } from "react";
import Location from "../components/home-page/Location";
import Search from "../components/home-page/Search";
import Categories from "../components/home-page/Categories";
import LocationPageControl from "../components/location-page/LocPageControl";
import LocHorCarousel from "../components/location-page/LocHorCarousel";
import LocVertCarousel from "../components/location-page/LocVertCarousel";
import LocPageFoot from "../components/location-page/LocPageFoot";
import { connect } from "react-redux";
import { useRouter } from 'next/router';
import { getCities, getAllPosts, getNewPosts, filterPosts } from '../redux/actions/actions'

function LocationPage(props) {
  const router = useRouter();

  useEffect(() => {
    props.getCities(router.query.id);
    props.getAllPosts();
    props.getNewPosts();
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
      <LocationPageControl cities={props.cities} />
      <LocHorCarousel posts={props.posts} />
      <LocVertCarousel posts={props.posts} />
      <LocPageFoot />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    states: state.app.states,
    categories: state.app.categories,
    cities: state.app.cities,
    posts: state.app.posts,
    newPosts: state.app.newPosts
  }
}

const mapDispatchToProps = {
  getCities, getAllPosts, getNewPosts, filterPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
