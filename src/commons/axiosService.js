//Viết riêng axios ở đây để dùng chung
class AxiosService {

  constructor () {
    const instance = axios.create({});
    instance.interceptors.response.use(this.handleSusscess,this.handleError)
    this.instance = instance; //tạo ra 1 biến để gọi lại, sử dụng ngoài constructor
  }

  //khi gọi thành công
  handleSusscess(reponse) {
    return reponse;
  }

  //khi gọi bị lỗi
  handleError(error) {
    return error;
  }

  //dùng để get url
  get(url){
    return this.instance.get(url);
  }

}




export default AxiosService();
