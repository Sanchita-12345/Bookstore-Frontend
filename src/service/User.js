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
    userUpdateCart(data){
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
    },
    userDisplayBooksHightoLow(data){
        return axios.getData("/sortBooksHighToLow",data);
    },
    userDisplayBooksLowtoHigh(data){
        return axios.getData("/sortBooksLowToHigh",data);
    },
    userDisplayCart(data){
        return axios.getData("/cart",data);
    },
    decrementQuantity(data){
        return axios.getData("/decrementQuantity",data);
    }
}