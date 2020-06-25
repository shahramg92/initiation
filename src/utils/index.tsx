import axios from 'axios';
const API_BASE_URL = 'https://api.intelliscan.io/user/'

/**
 * Post resgister method
 * @param userName String
 * @param password String
 * @return response data {}
 */

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

/**
 * Post resgister method
 * @param token String
 * @return response data {}
 */

export const getDomanData = async (token: String):Promise<any> => {
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
}
