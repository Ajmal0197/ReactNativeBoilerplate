import axios from 'axios'
import { serviceUrl } from '../constants/constants'
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Create an Axios Client with defaults
 */

const getToken = async () => await AsyncStorage.getItem("access-token")

const client = axios.create({
    baseURL: serviceUrl.baseURL,
    // auth: { Authorization: 'Bearer ' + { getToken } }
});

/**
* Request Wrapper with default success/error actions
*/
export const apiCall = function (method, route, body = null, token = null) {

    const onSuccess = function (response) {
        console.debug('Request Successful!', response);
        return response.data;
    }

    const onError = function (error) {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    }

    return client({
        method,
        url: route,
        data: body
    }).then(onSuccess)
        .catch(onError);
}


//USAGE:
// const myFun = token => {
//     return request({
//       url: "/path/to",
//       method: "GET",
//       config: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//   };
// request({
//     method: 'get',
//     url: 'posts',
// }).then((resp) => {
//     console.log('resp', resp);
// })

// request({
//     method: 'POST',
//     url: 'posts',
//     data: {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }
// }).then((resp) => {
//     console.log('resp', resp);
// })