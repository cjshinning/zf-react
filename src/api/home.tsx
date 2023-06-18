import axios from './';

export function getSliders() {
  // return axios.get('/slider/list');
  return new Promise((resolve, reject) => {
    // 验证通过
    resolve({
      success: true,
      data: [{
        url: 'https://img2.37wanimg.com/2021/07/06095543shuHH.jpg'
      }, {
        url: 'https://img2.37wanimg.com/2021/07/060955366sa8L.jpg'
      }, {
        url: 'https://img2.37wanimg.com/2021/07/06095526PTqX0.jpg'
      }, {
        url: 'https://img2.37wanimg.com/2021/07/06095522bqRjy.jpg'
      }]
    })
  })
}


