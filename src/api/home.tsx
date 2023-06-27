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

export function getLessions(
  currentCategory: string,//当前分类
  offset: number,//偏移量
  limit: number//每页的条数
) {
  // return axios.get(`/lession/list?category=${currentCategory}&offset=${offset}&limit=${limit}`);
  return new Promise((resolve, reject) => {
    // 验证通过
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          list: [{
            id: '1001',
            order: 1,
            category: 'react',
            price: '$1000元',
            title: '1.React全栈架构',
            video: 'https://video.37wanimg.com/rydts/202012/pc_role_1.mp4',
            poster: 'https://img2.37wanimg.com/2022/09/23142814PkZ5W.jpg',
            url: ''
          }, {
            id: '1002',
            order: 2,
            category: 'react',
            price: '$1000元',
            title: '2.React全栈架构',
            video: 'https://video.37wanimg.com/rydts/202007/02_03.mp4',
            poster: 'https://img2.37wanimg.com/2022/09/231428081OP54.jpg',
            url: ''
          }, {
            id: '1003',
            order: 3,
            category: 'react',
            price: '$1000元',
            title: '3.React全栈架构',
            video: 'https://video.37wanimg.com/rydts/202112/pc-role-4.mp4',
            poster: 'https://img2.37wanimg.com/2022/09/23142802glhuM.jpg',
            url: ''
          }, {
            id: '1004',
            order: 4,
            category: 'react',
            price: '$1000元',
            title: '4.React全栈架构',
            video: 'https://video.37wanimg.com/rydts/202007/02_04.mp4',
            poster: 'https://img2.37wanimg.com/2022/09/23142757XlqRt.jpg',
            url: ''
          }, {
            id: '1005',
            order: 5,
            category: 'react',
            price: '$1000元',
            title: '5.React全栈架构',
            video: 'https://video.37wanimg.com/rydts/202112/video-20211228-1.mp4',
            poster: 'https://img2.37wanimg.com/2022/09/231427530dsYq.jpg',
            url: ''
          }],
          hasMore: true
        }
      })
    }, 1000)
  })
}


export function getLession<T>(
  id: string
) {
  // return axios.get<T,T>(`/lession/${id}`);
  return new Promise((resolve, reject) => {
    // 验证通过
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          id: '1001',
          order: 1,
          category: 'react',
          price: '$1000元',
          title: '1.React全栈架构',
          video: 'https://video.37wanimg.com/rydts/202012/pc_role_1.mp4',
          poster: 'https://img2.37wanimg.com/2022/09/23142814PkZ5W.jpg',
          url: ''
        }
      })
    }, 1000)
  })
}
