import axios from 'axios';

const KEY = 'AIzaSyCI_XvJ_G-FYpJqW2bpYtPMk78XtTh7XDU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})


