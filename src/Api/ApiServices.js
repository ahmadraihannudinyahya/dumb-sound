import axios from "axios";

const api = axios.create({
  baseURL : 'https://dumbsound.ahmadyahya.site/api'
});

const ApiServices = {
  postRegisterUser : async (payload) => {
    try {
      const response = await api.post('/register', payload);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      };
      return 'something went wrong';
    }
  },
  postLoginUser : async (payload) => {
    try {
      const response = await api.post('/login', payload);
      localStorage.setItem('token', response.data.token);
      if(response.data.status === 1){
        localStorage.setItem('isAdmin', response.data.status);
      }
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      };
      return 'something went wrong';
    }
  },
  getMusics : async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/music', {
        headers : {
          Authorization :  `bearer ${token}`
        }
      });
      return response.data.data
    } catch (error) {
      console.log(error);
    }
  },
  postArtis : async (payload) => {
    try {
      await api.post('/artis', payload, {
        headers : {
          Authorization :  `bearer ${localStorage.getItem('token')}`
        }
      });
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      };
      return 'something went wrong';
    };
  },
  getArtis : async () => {
    try {
      const response = await api.get('/artis');
      return response.data.data
    } catch (error) {
      console.log(error);
    }
  },
  postMusic : async (formData) => {
    try {
      await api.post('/music', formData, {
        headers : {
          Authorization :  `bearer ${localStorage.getItem('token')}`,
          'Content-Type' : 'multipart/form-data'
        }
      });
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      };
      return 'something went wrong';
    };
  },
  getTransaction : async () => {
    try {
      const response = await api.get('/transaction', {
        headers : {
          Authorization :  `bearer ${localStorage.getItem('token')}`
        },
      });
      return response.data.data
    } catch (error) {
      console.log(error);
    };
  },
  putApproveTransaction : async (id) => {
    try {
      await api.put(`/transaction/${id}/approve`,{} ,{
        headers : {
          Authorization :  `bearer ${localStorage.getItem('token')}`
        },
      });
    } catch (error) {
      console.log(error.response.data);
    };
  },
  putCancelTransaction : async (id) => {
    try {
      await api.put(`/transaction/${id}/cancel`,{} ,{
        headers : {
          Authorization :  `bearer ${localStorage.getItem('token')}`
        },
      });
    } catch (error) {
      console.log(error);
    };
  },
  postTransaction : async (formData) => {
    try {
      await api.post('/transaction', formData, {
        headers : {
          Authorization :  `bearer ${localStorage.getItem('token')}`,
          'Content-Type' : 'multipart/form-data'
        }
      });
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      };
      return 'something went wrong';
    };
  },
  getMusicById : async (id) => {
    try {
      const result = await api.get(`/music/${id}`,{
        headers : {
          Authorization :  `bearer ${localStorage.getItem('token')}`,
          'Content-Type' : 'multipart/form-data'
        }
      });
      return result.data.data;
    } catch (error) {
      if(error.response){
        return {isError : true, message : error.response.data.message}
      };
      console.log(error);
    };
  }, 
};

export default ApiServices;