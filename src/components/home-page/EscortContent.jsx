import React, { useState, useEffect } from "react";
import s from "./escort.module.scss";
import ModelsFilter from "../models-filter/ModelsFilter";
import EscortList from "./EscortList";
import EscortGrid from "./EscortGrid";
import $ from "jquery";

export default function EscortContent({
  posts,
  pagesNumber,
  selectPostsPage,
  availability,
  available_to,
  ethnicity,
  eyes,
  hair,
  affiliation,
  filterPosts
}) {
  const [visibleComponent, setVisibleComponent] = useState("list");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    $(".filter_items_block").hide(() => {
      setShowFilter(false);
    });
  }, []);

  const slideFilter = () => {
    $(".filter_items_block").slideToggle(() => {
      setShowFilter(!showFilter);
    });
  };

  const changeVisibleComponent = (e) => {
    e.persist();
    $(".models-view-block").fadeOut(300, function () {
      setVisibleComponent($(e.target).attr("name"));
      $(".models-view-block").fadeIn(700);
    });
  };

  return (
    <section className={s.escort_content_block} style={{ minHeight: "100vh" }}>
      <div className={`text-white ${s.escort_content_title}`}>
        <p>Meet our selection of worldwide escorts</p>
      </div>
      <div className={`${s.filter_sort_control}`}>
        <div className={s.filter_btn_wrap}>
          <div className={s.filter_btn_group}>
            <span onClick={slideFilter} className={`pl-2 ${s.filter_btn}`}>
              FILTER
						</span>
            <select className={`pl-2 form-control border-0 ${s.sorting_btn}`}>
              <option value="default" hidden>
                SORTING
							</option>
              <option value="price / from biger to smaller">
                price / from biger to smaller
							</option>
              <option value="price / from smaller to biger">
                price / from smaller to biger
							</option>
              <option value="date added">date added</option>
              <option value="number of reviews">number of reviews</option>
            </select>
          </div>
          <div className={s.filter_btn_group}>
            <span
              name="grid"
              className={`grid_btn carousel_layout_change_btn ${
                visibleComponent === "grid" ? "active_btn_pink" : ""
                } ${s.grid_btn}`}
              onClick={(e) => changeVisibleComponent(e)}
            >
              GRID
						</span>
            <span
              name="list"
              className={`list_btn carousel_layout_change_btn ${
                visibleComponent === "list" ? "active_btn_pink" : ""
                } ${s.list_btn}`}
              onClick={(e) => changeVisibleComponent(e)}
            >
              LIST
						</span>
          </div>
        </div>
      </div>

      <div className={`filter_items_block ${s.filter_items_block}`}>
        <ModelsFilter
          availability={availability}
          available_to={available_to}
          ethnicity={ethnicity}
          affiliation={affiliation}
          filterPosts={filterPosts}
          eyes={eyes}
          hair={hair} />
      </div>

      <div className="models-view-block">
        {visibleComponent === "list" ? (
          <EscortList
            posts={posts}
            pagesNumber={pagesNumber}
            selectPostsPage={selectPostsPage}
          />
        ) : (
            <EscortGrid
              posts={posts}
              pagesNumber={pagesNumber}
              selectPostsPage={selectPostsPage}
            />
          )}
      </div>
    </section>
  );
}
