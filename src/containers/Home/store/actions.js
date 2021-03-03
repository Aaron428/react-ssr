import axios from 'axios';
import {CHANGE_HOME_LIST} from './constants';

const changeHomeList = (newList) => ({
  type: CHANGE_HOME_LIST,
  newList,
});

export const getHomeListAction = () => (dispatch) => {
  return axios.get('http://localhost:5090/news').then((res) => {
    if (res.status === 200) {
      const list = res.data;
      dispatch(changeHomeList(list));
    }
  });
  // setTimeout(() => {
  //   console.log('fake data');
  // }, 1870);
};
