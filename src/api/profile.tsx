import axios from './';
import { LoginPayload, RegisertPayload } from '@/typings/user';

export function validate() {
  // 调接口改成写死的假数据
  // return axios.get('/user/validate');
  return new Promise((resolve, reject) => {
    // 验证通过
    resolve({
      success: true,
      data: {
        username: "Jenny",
        email: "123456.qq.com",
        createAt: "",
        updateAt: "",
        id: "111111"
      }
    })
    // 验证不通过
    // reject({
    //   success: false,
    //   message: "token未提供"
    // })
  })
}

export function login<T>(values: LoginPayload) {
  // return axios.post<T, T>('/user/login', values);
  return new Promise((resolve, reject) => {
    // 验证通过
    resolve({
      success: true,
      data: {
        token: "ey1212yahASHahsdhshdhsdhsdhsdhhsdds",
      }
    })
  })
}

export function register<T>(values: RegisertPayload) {
  // return axios.post<T, T>('/user/register', values);
  return new Promise((resolve, reject) => {
    // 验证通过
    resolve({
      success: true,
      data: {
        token: "ey1212yahASHahsdhshdhsdhsdhsdhhsdds",
      }
    })
  })
}

// export function changeAvatar() {
//   // return axios.post('user/uploadAvatar');
//   return new Promise((resolve, reject) => {
//     // 验证通过
//     resolve({
//       success: true,
//       data: 'https://img3.mukewang.com/5333a2590001069f02000200-100-100.jpg'
//     })
//     // 验证不通过
//     // reject({
//     //   success: false,
//     //   message: "上传多雾"
//     // })
//   })
// }

