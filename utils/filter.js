import Vue from 'vue';
import { div, mul, dateFormat, getFileSize } from './index';

/**
 * @description: accurate division
 * @param {Number} cent | dividend
 * @param {Number} per | divisor
 * @return {Number} the result of accurate division
 */

export function accDiv (cent = 0, per = 100) {
  return div(cent, per);
}

/**
 * @description: accurate multiplication
 * @param {Number} cent | multiplier
 * @param {Number} per | multiplier
 * @return {Number} the result of accurate multiplication
 */

export function accMul (cent = 0, per = 100) {
  return mul(cent, per);
}

/**
 * @description: dateFormat
 * @param { DateObject } dateObj
 * @return { String } dateFormat
 */

export function accDateFormat (dateObj = '', format = 'yyyy-M-d hh:mm') {
  return dateFormat(dateObj, format);
}

/**
 * @description: 字节大小转换
 * @param { Number } size 字节大小
 * @return { String } 转换之后字符串
 */
export function accFileSize (size) {
		return getFileSize(size);
}

const filters = {
  accDiv,
  accMul,
	accDateFormat,
	accFileSize
};

/**
 * @description: set Vue filters
 * @param {Object} filters | the filters's callBack
 */

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
export default filters;