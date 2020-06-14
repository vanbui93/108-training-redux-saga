import * as taskConstants from './../constants/task';

export const fetchListTasks = (params={}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      params,
    }
  }
}

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  }
}

export const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    }
  }
}

export const filterTask = keyword => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  }
});

export const filterTaskSuccess = data => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  }
})

//Cần truyền dữ liệu lên title, description
export const addTask = (title, description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description,
    }
  }
}

//sau khi add thành công thì trả về data
export const addTaskSuccess = data => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data
    }
  }
}

export const addTaskFailed = error => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error,
    }
  }
}

export const setTaskEditing = (task) => {
  return {
    type: taskConstants.SET_TASK_EDITING,
    payload: {
      task,
    }
  }
}

/*
B1 fetchListTaskRequest()
B2 Reset: state tasks => []
B3 fetchLishTaskSuccess(data response)
*/

// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTasks()); // gọi FETCH_TASK
//     taskApis.getListTask().then(res => {
//       dispatch(fetchListTaskSuccess(res.data));   //gọi FETCH_TASK_SUCCESS
//     }).catch(error => {
//       dispatch(fetchListTaskFailed(error));   //gọi FETCH_TASK_FAILED
//     })
//   }
// }
