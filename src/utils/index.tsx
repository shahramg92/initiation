import axios from 'axios';

const API_BASE_URL = 'https://api.intelliscan.io/user/'

export const postRegisterForm = async (userName: String, password: String):Promise<any> => {
    var data = JSON.stringify({"username":userName,"password":password});
    var config: any = {
        method: "POST",
        url: `${API_BASE_URL}sign-in/`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    var response: any;
    try {
        response = await axios.request(config);
    } catch (error) {
        response = {};
    } 
    return response;
}

export const getDomanData = async (token: String):Promise<any> => {
    console.log(token);
    var axios = require('axios');
    var config: any = {
        method: 'get',
        url: `${API_BASE_URL}domains/`,
        headers: { 
            'token': token
        }
    };

    var response: any;
    try {
        response = await axios.request(config);
    } catch (error) {
        response = {};
    } 
    return response;

    /**
     * var config = {
  method: 'get',
  url: 'https://api.intelliscan.io/user/domains',
  headers: { 
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIwLTA2LTI1VDIzOjE4OjAxLjUzODYzMTQ2NloiLCJ1c2VybmFtZSI6ImluaXRpYXRlIn0.9O_Pww7QsMXiWdG33BRPYkvCij8CdH_7pd4R0Wu8BzM'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
     */

}
