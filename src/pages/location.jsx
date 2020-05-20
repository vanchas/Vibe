import React from "react";
import Location from "../components/home-page/Location";
import Search from "../components/home-page/Search";
import Categories from "../components/home-page/Categories";
import LocationPageControl from "../components/location-page/LocPageControl";
import LocHorCarousel from "../components/location-page/LocHorCarousel";
import LocVertCarousel from "../components/location-page/LocVertCarousel";
import LocPageFoot from "../components/location-page/LocPageFoot";


export default function LocationPage() {
  return (
    <div>
      <Location />
      <Search />
      <Categories />
      <LocationPageControl />
      <LocHorCarousel />
      <LocVertCarousel />
      <LocPageFoot />
    </div>
  );
}
