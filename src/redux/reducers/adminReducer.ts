import { GET_ALL_SUPPORT_TASKS, DELETE_SUPPORT_TASK, CREATE_CATEGORY } from "../actions/types";


const initialState = {
  tasks: [],

}

export const adminReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_SUPPORT_TASKS:
      return { ...state, tasks: action.payload }

    case DELETE_SUPPORT_TASK:
      const tasks = state.tasks.filter((task: any) => task.id != action.payload);
      return { ...state, tasks }

    default:
      return state;
  }
}
