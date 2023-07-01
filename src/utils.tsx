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

/**
 * 下拉刷新
 * @param element 容器
 * @param callback 
 */
export function downRefresh(element: HTMLElement, callback: Function) {
  let startY: number; // 变量，存放下拉时候起始纵坐标
  let distance: number;  // 本地下拉的距离
  let originalTop = element.offsetTop;  //在最初始状态下元素距离顶部的距离 初始top值
  let startTop: number;
  let $timer: any;
  // touchStart touchMove touchEnd
  element.addEventListener('touchstart', (event: TouchEvent) => {
    startTop = element.offsetTop; //元素初始top值
    startY = event.touches[0].pageY;  //开始按下的时候的纵坐标
    let touchMove = throttle(_touchMove, 30);
    element.addEventListener('touchmove', touchMove);
    element.addEventListener('touchend', touchEnd);
    let lastTime = Date.now();

    function _touchMove(event: TouchEvent) {
      console.log('===========================');
      console.log(Date.now() - lastTime);
      console.log('===========================');
      lastTime = Date.now();
      let pageY = event.touches[0].pageY; //移动过程中最新的纵坐标
      if (pageY > startY) { //说明是下拉
        distance = pageY - startY;
        element.style.top = startTop + distance + 'px';
      } else {
        element.removeEventListener('touchmove', touchMove);
        element.removeEventListener('touchend', touchEnd);
      }
    }

    function touchEnd(event: TouchEvent) {
      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchEnd);
      if (distance > 50) {
        callback();
      }
      function _back() {
        let currentTop = element.offsetTop;
        if (currentTop - originalTop >= 1) {
          element.style.top = (currentTop - 1) + 'px';
          requestAnimationFrame(_back);
        } else {
          element.style.top = originalTop + 'px';
        }
      }
      requestAnimationFrame(_back);
    }
  })
}

// 节流
function throttle(func: Function, delay: number) {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  }
}