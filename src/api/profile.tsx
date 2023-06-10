import axios from './';

export function validate() {
  // 调接口改成写死的假数据
  // return axios.get('/user/validate');
  return new Promise((resolve, reject) => {
    // 验证通过
    // resolve({
    //   success: true,
    //   data: {
    //     username: "Jenny",
    //     email: "123456.qq.com",
    //     createAt: "",
    //     updateAt: "",
    //     id: "111111"
    //   }
    // })
    // 验证不通过
    reject({
      success: false,
      message: "token未提供"
    })
  })
}