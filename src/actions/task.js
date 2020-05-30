import * as taskApis from './../apis/task';

export const fetchListTask = () => {
    return dispatch => {
        taskApis.getListTask().then(data => {
            console.log('data', data);
        }).catch(error => {
            console.log('error', error);
        })
    }
}