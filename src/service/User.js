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
}