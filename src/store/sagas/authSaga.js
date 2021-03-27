import { delay, takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { types } from '../ActionTypes';
import { serviceUrl } from '../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiCall } from '../../util/axiosApiCallWrapper'


function* loginGen(value) {
    try {

        let response1 = yield call(apiCall, "GET", serviceUrl.user)//Get request
        let response2 = yield call(apiCall, "POST", serviceUrl.user, {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })  //post request
        console.log('loginGenobject', response1, response2)
    } catch (error) {
        console.log(error);
    }
}


export default function* watchAuthSaga() {
    yield takeLatest(types.LOGIN_SAGA, loginGen);

}