export function loadMore(element: HTMLElement, callback: Function) {
  function _loadMore() {
    let clientHeight = element.clientHeight;  //容器的高度
    let scrollTop = element.scrollTop;
    let scrollHeight = element.scrollHeight;  //内容的高度
    if (clientHeight + scrollTop + 10 >= scrollHeight) {
      callback();
    }
  }
  element.addEventListener('scroll', debounce(_loadMore, 300));
}

// 防抖
export function debounce(callback: Function, wait: number) {
  var timeout: any;
  return function () {
    if (!!timeout) clearTimeout(timeout);
    timeout = setTimeout(callback, wait);
  }
}