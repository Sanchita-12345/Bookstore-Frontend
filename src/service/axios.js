import axios from 'axios'

axios.defaults.baseURL=process.env.VUE_APP_ROOT_URL
axios.defaults.headers.common['Authorization']='Bearer'+ localStorage.getItem('token');

export default class AxiosService{
    postData(url, data){
        return axios.post(url, data).then(response =>{
            return response;
        }).catch(error =>{
            return error;
        })
    }

    getData(url,data){
        return axios.get(url,data).then(response =>{
            return response;
        }).catch(error =>{
            return error;
        })
    }

    updateData(url, data){
        return axios.put(url, data).then(response=>{
            return response;
        }).catch(error=>{
            return error;
        })
    }

    deleteData(url, data){
        return axios.delete(url, data).then(response=>{
            localStorage.getItem('token', response.data.token);
            return response;
        }).catch(error=>{
            return error;
        })
    }
}