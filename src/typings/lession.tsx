export default interface Lession {
  id: string;
  order: number,  //顺序
  category: string, //所属分类
  price: string,  //价格
  title: string,  //标题
  video: string,  //视频地址
  poster: string, //海报地址
  url: string,  //url地址
}
// 服务器接口返回的数据
export interface LessionResult {
  data: Lession,
  success: boolean
}