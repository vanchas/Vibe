import React from "react";
import UserCabinetEdit from "../components/user-cabinet/UserCabinetEdit";
import { connect } from "react-redux";
import {
  getAllUsersTasks,
  createSupportTask,
  getComplains,
  getFavoritesUser,
  selectPostsPage,
  addToFavorites,
} from "../redux/actions/actions";

function UserCabinet({
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
  return (
    <div>
      <UserCabinetEdit
        tasks={tasks}
        getAllUsersTasks={getAllUsersTasks}
        createSupportTask={createSupportTask}
        getComplains={getComplains}
        complains={complains}
        getFavoritesUser={getFavoritesUser}
        selectPostsPage={selectPostsPage}
        addToFavorites={addToFavorites}
        posts={posts}
        pagesNumber={pagesNumber}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.app.supportTasks,
  complains: state.app.complains,
  posts: state.app.posts,
  pagesNumber: state.app.pagesNumber,
});

const mapDispatchToProps = {
  getAllUsersTasks,
  createSupportTask,
  getComplains,
  getFavoritesUser,
  selectPostsPage,
  addToFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCabinet);
