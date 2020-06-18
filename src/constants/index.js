import AdminHomePage from './../containers/AdminHomePage/index';
import Taskboard from './../containers/Taskboard/index';

//tạo 1 đường dẫn chứa endpoint
export const API_ENDPOINT = 'http://localhost:3000'
export const STATUSES = [
  {
    value:0,
    label: "READY"
  },
  {
    value:1,
    label: "IN PROGRESS"
  },
  {
    value:2,
    label: "COMPLETE"
  }
];

export const STATUS_CODE = {
  SUSCESS:200,
  CREATED: 201,
  UPDATED: 202
}

export const ADMIN_ROUTES = [
  {
    path: '/',
    name: 'Trang quản trị',
    exact: true,
    component: AdminHomePage,
  },
  {
    path: '/task-board',
    name: 'Quản lý công việc',
    component: Taskboard,
  }
];