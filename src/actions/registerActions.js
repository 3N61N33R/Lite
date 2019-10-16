import axios from 'axios';
import { REGISTER_FAILED, REGISTER_SUCCESSFUL } from './registerTypes';

const url = 'http://127.0.0.1:5000/api/v2/auth/signup';
console.log('URL', url);

export const registerSuccessful = () => ({
  type: REGISTER_SUCCESSFUL,
  payload: ['Registration Successful.'],
});

export const registerFailed = error => ({
  type: REGISTER_FAILED,
  error,
});

export const registerUser = user => (dispatch) => {
  axios
    .post(url, { ...user })
    .then((res) => {
      if (res.status === 201) {
        dispatch(registerSuccessful());
        history.push('/');
      }
    })
    .catch((error) => {
      dispatch(registerFailed(error));
    });
};
