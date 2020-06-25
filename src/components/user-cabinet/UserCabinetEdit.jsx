import React, { useState } from "react";
import s from "./user-edit.module.scss";
import UserFavorites from "./UserFavorites";
import UserEdit from "./UserEdit";
import UserReports from "./UserReports";
import UserCabinetControl from "./UserCabinetControl";
import UserPrices from "./UserPrices";
import UserBalance from "./UserBalance";
import Support from "../support/Support";

export default function UserCabinetEdit({
  getAllUsersTasks,
  createSupportTask,
  tasks,
  getComplains,
  complains,
  getFavoritesUser,
  selectPostsPage,
  addToFavorites,
  posts,
  pagesNumber,
}) {
  const [component, setComponent] = useState(
    <UserFavorites
      getFavoritesUser={getFavoritesUser}
      selectPostsPage={selectPostsPage}
      addToFavorites={addToFavorites}
      posts={posts}
      pagesNumber={pagesNumber}
    />);

  const changeComponent = (comp) => {
    if (comp === "favorites") {
      setComponent(
        <UserFavorites
          selectPostsPage={selectPostsPage}
          addToFavorites={addToFavorites}
          posts={posts}
          pagesNumber={pagesNumber}
          getFavoritesUser={getFavoritesUser}
        />);
    } else if (comp === "reports") {
      setComponent(
        <UserReports
          getComplains={getComplains}
          complains={complains}
        />
      );
    } else if (comp === "edit") {
      setComponent(<UserEdit />);
    } else if (comp === "prices") {
      setComponent(<UserPrices />);
    } else if (comp === "balance") {
      setComponent(<UserBalance />);
    } else if (comp === "support") {
      setComponent(
        <Support
          tasks={tasks}
          getAllUsersTasks={getAllUsersTasks}
          createSupportTask={createSupportTask}
        />
      );
    }
  };

  return (
    <div className={`${s.cabinet_wrap}`}>
      <UserCabinetControl setComponent={changeComponent} />
      {component}
    </div>
  );
}
