//Đây là file tổng hợp gọi api
import axiosService from './../commons/axiosService';   //res trả về
import { API_ENDPOINT } from './../constants/index';    //locahost

//http://localhost:3000/tasks
const url ='tasks';

export const getListTask = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);  //ở đây gọi hàm get
}
//http://localhost:3000/tasks   METHOD: POST
export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}