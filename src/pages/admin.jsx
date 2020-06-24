import React, { useEffect } from "react";
import AdminRegistration from "../components/admin/AdminRegistration";
import AdminCategories from "../components/admin/AdminCategories";
import { connect } from "react-redux";
import {
  getAllSupportTasks,
  editSupportTasks,
  deleteSupportTask,
  createCategory,
  editCategory,
  deleteCategory,
} from "../redux/actions/adminActions";
import TasksList from "../components/admin/TasksList";

function Admin({
  tasks,
  getAllSupportTasks,
  editSupportTasks,
  deleteSupportTask,
  createCategory,
  editCategory,
  deleteCategory,
}) {
  useEffect(() => {
    getAllSupportTasks();
  }, []);

  return (
    <div>
      <AdminRegistration />
      <AdminCategories
        createCategory={createCategory}
        editCategory={editCategory}
        deleteCategory={deleteCategory}
      />
      <TasksList
        tasks={tasks}
        editSupportTasks={editSupportTasks}
        deleteSupportTask={deleteSupportTask}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.admin.tasks,
  };
};

const mapDispatchToProps = {
  getAllSupportTasks,
  editSupportTasks,
  deleteSupportTask,
  createCategory,
  editCategory,
  deleteCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
