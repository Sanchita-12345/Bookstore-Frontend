import AxiosService from '../service/axios'
const axios = new AxiosService()

export default{
    userRegister(data){
        return axios.postData("/register",data);
    },
    userLogin(data){
        return axios.postData("/login",data);
    },
    userForgotPassword(data){
        return axios.postData("/auth/sendPasswordResetLink",data);
    },
    userResetPassword(data){
        return axios.postData("/auth/resetPassword",data);
    },
    userDisplayBooks(data){
        return axios.getData("/displayBooks",data);
    },
    userDisplayParticularBook(data){
        return axios.getData(`/displayParticularBook/${data.id}`,data);
    },
    userAddToCart(data){
        return axios.updateData(`/addToCart/${data.id}`,data);
    },
    userRemoveFromCart(data){
        return axios.deleteData(`/removeFromCart/${data.id}`,data);
    },
    customerRegister(data){
        return axios.postData("/customerRegistration",data);
    },
    mailSendSuccessfully(data){
        return axios.postData("/mail",data);
    }
}