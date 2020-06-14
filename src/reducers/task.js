import * as taskConstants from './../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
  listTask: [],
  taskEditing: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      }
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data
      }
    }
    case taskConstants.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: []
      }
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload
      return {
        ...state,
        listTask: data,
      }
    }
    case taskConstants.ADD_TASK: {
      return {
        ...state,
      }
    }

    //sau khi add thành công thì trả về danh sách mới
    case taskConstants.ADD_TASK_SUCCESS: {
      const {data} = action.payload;
      return {
        ...state,
        listTask: [data].concat(state.listTask) //concat - nối listTask mới add vào vs data
      }
    }
    case taskConstants.ADD_TASK_FAILED: {
      const {error} = action.payload;
      toastError(error);
      return {
        ...state,

      }
    }
    case taskConstants.SET_TASK_EDITING: {
      const {task} = action.payload;
      console.log(action);

      return {
        ...state,
        taskEditing: task,
      }
    }
    default:
      return state
  }
}

export default taskReducer;
