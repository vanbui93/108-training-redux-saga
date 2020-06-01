import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task'

export const fetchListTasks = () => {
    return {
        type: taskConstants.FETCH_TASK,
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
            error
        }
    }
}

/* 
B1 fetchListTaskRequest()
B2 Reset: state tasks => []
B3 fetchLishTaskSuccess(data response)
*/

export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTasks()); // gọi FETCH_TASK
        taskApis.getListTask().then(res => {
            dispatch(fetchListTaskSuccess(res.data));   //gọi FETCH_TASK_SUCCESS
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));   //gọi FETCH_TASK_FAILED
        })
    }
}