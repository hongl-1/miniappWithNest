export function unRequest() {
  return uni.reLaunch({
    url: "/pages/notfound/index",
  });
}

export function debounce(fn, interval) {
  // 防抖函数
  let timer;
  const gapTime = interval || 1000;
  return function () {
    clearTimeout(timer);
    const context = this;
    const args = arguments;
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, gapTime);
  };
}

export function deepCopy(source) {
  if (!isObject(source)) return source; //如果不是对象的话直接返回
  let target = Array.isArray(source) ? [] : {}; //数组兼容
  for (const k in source) {
    if (source.hasOwnProperty(k)) {
      if (typeof source[k] === "object") {
        target[k] = deepCopy(source[k]);
      } else {
        target[k] = source[k];
      }
    }
  }
  return target;
}

export function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

export function isEmptyObj(obj) {
  return Object.keys(isEmptyObj).length === 0;
}

export function onlyOneKeyObj(obj) {
  return Object.keys(isEmptyObj).length === 1;
}

export function getTimeDiff(startTime, endTime) {
  startTime = new Date(startTime).getTime();
  endTime = new Date(endTime).getTime();
  return ((endTime - startTime) / 1000 / 60).toFixed(0);
}

export function showToast(
  title,
  icon = "none",
  duration = 1500,
  callBack = () => {}
) {
  uni.showToast({
    icon,
    title,
    duration,
  });
  setTimeout(() => {
    callBack();
  }, duration);
}

export function isGetListFinish(pageNo, pageSize, total) {
  return pageNo !== 1 && (pageNo - 1) * pageSize >= total;
}

export function previewImage(currentUrl, urls) {
  uni.previewImage({
    current: currentUrl, // 当前显示图片的http链接
    urls: urls || [currentUrl], // 需要预览的图片http链接列表
  });
}

export function myFunction(time) {
  const d = new Date();
  d.setHours(d.getHours() + time);
  return d;
}
export function myFunction2(time) {
  const d = new Date();
  d.setDate(d.getDate() + time);
  return d;
}
export const parseTime = (time) => {
  if (typeof time === "string") {
    time = parseInt(time);
  }
  const format = "{y}-{d}-{m} {h}:{i}:{s}";
  const date = new Date(time);
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1, //月是从0开始算的
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
  };
  const strTime = format.replace(/{(y|m|d|h|i|s)+}/g, (result, key) => {
    let value = formatObj[key];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value;
  });
  console.log(strTime);
  return strTime;
};

/**
 * 页面跳转
 * @param url {string}
 * @param type {'navigateTo' | 'reLaunch' | 'redirectTo'}
 */
export function goPage(url, type = "navigateTo") {
  uni[type]({
    url,
    fail: (e) => {
      console.error(e);
    },
  });
}

function getTwoPointAngle(o_latlngs, latlngs) {
  let A = new MyLatLng(o_latlngs[0], o_latlngs[1]);

  let B = new MyLatLng(latlngs[0], latlngs[1]);

  // console.log(getAngle(B, A));

  return getAngle(B, A);
}

function getMyLatLng(A, distance, angle) {
  let dx = distance * 1000 * Math.sin(Math.toRadians(angle));

  let dy = distance * 1000 * Math.cos(Math.toRadians(angle));

  let bjd = ((dx / A.Ed + A.m_RadLo) * 180.0) / Math.PI;

  let bwd = ((dy / A.Ec + A.m_RadLa) * 180.0) / Math.PI;

  return new MyLatLng(bjd, bwd);
}

function getAngle(A, B) {
  let dx = (B.m_RadLo - A.m_RadLo) * A.Ed;

  let dy = (B.m_RadLa - A.m_RadLa) * A.Ec;

  let angle = 0.0;

  angle = (Math.atan(Math.abs(dx / dy)) * 180.0) / Math.PI;

  let dLo = B.m_Longitude - A.m_Longitude;

  let dLa = B.m_Latitude - A.m_Latitude;

  if (dLo > 0 && dLa <= 0) {
    angle = 90.0 - angle + 90;
  } else if (dLo <= 0 && dLa < 0) {
    angle = angle + 180.0;
  } else if (dLo < 0 && dLa >= 0) {
    angle = 90.0 - angle + 270;
  }

  return angle;
}

class MyLatLng {
  constructor(lng, lat) {
    const Rc = 6378137; // 赤道半径

    const Rj = 6356725; // 极半径

    // 经度转为度分秒

    this.m_LoDeg = lng;

    this.m_LoMin = (lng - this.m_LoDeg) * 60;

    this.m_LoSec = (lng - this.m_LoDeg - this.m_LoMin / 60.0) * 3600;

    // 纬度转为度分秒

    this.m_LaDeg = lat;

    this.m_LaMin = (lat - this.m_LaDeg) * 60;

    this.m_LaSec = (lat - this.m_LaDeg - this.m_LaMin / 60.0) * 3600;

    this.m_Longitude = lng;

    this.m_Latitude = lat;

    this.m_RadLo = (lng * Math.PI) / 180.0; // 经度弧度

    this.m_RadLa = (lat * Math.PI) / 180.0; // 纬度弧度

    this.Ec = Rj + ((Rc - Rj) * (90.0 - this.m_Latitude)) / 90.0;

    this.Ed = this.Ec * Math.cos(this.m_RadLa);
  }
}

export function getrst(sPoint, ePoint) {
  let rst = getTwoPointAngle(ePoint, sPoint);

  return rst;
}
