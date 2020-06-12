import * as taskConstants from './../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
  listTask: []
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
    default:
      return state
  }
}

export default taskReducer;
