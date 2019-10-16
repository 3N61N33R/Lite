import axios from 'axios';

const url = 'http://127.0.0.1:5000/api/v2/auth/signin';

class AgentAPI {
  static postAgent({ email, password }) {
    return axios.post(url, { email, password });
  }
}

const sendLoginRequest = ({ email, password }) => AgentAPI.postAgent({ email, password });

export default sendLoginRequest;
