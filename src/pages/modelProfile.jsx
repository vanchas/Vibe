import React from "react";
import Categories from "../components/home-page/Categories";
import Location from "../components/home-page/Location";
import Search from "../components/home-page/Search";
import ProfilesControl from "../components/model-profile/ProfilesControl";
import ModelProfileCard from "../components/model-profile/ModelProfileCard";

export default function ModelProfile() {
  return (
    <div>
      <Location />
      <Search />
      <Categories />
      <ProfilesControl />
      <ModelProfileCard />
    </div>
  );
}
