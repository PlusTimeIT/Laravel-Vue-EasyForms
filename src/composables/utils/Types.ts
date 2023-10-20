import { TypeHelper } from "../../classes/utils";

const isArray = (o: any): boolean => TypeHelper.isArray(o);
const isObject = (o: any): boolean => TypeHelper.isObject(o);
const isFile = (o: any): boolean => TypeHelper.isFile(o);
const isString = (o: any): boolean => TypeHelper.isString(o);
const isBoolean = (o: any): boolean => TypeHelper.isBoolean(o);
const isFunction = (o: any): boolean => TypeHelper.isFunction(o);
const isNumber = (o: any): boolean => TypeHelper.isNumber(o);
const isNumeric = (o: any): boolean => TypeHelper.isNumeric(o);
const isNull = (o: any): boolean => TypeHelper.isNull(o);
const isUndefined = (o: any): boolean => TypeHelper.isUndefined(o);
const isEmpty = (o: any): boolean => TypeHelper.isEmpty(o);

export {
  isArray,
  isObject,
  isFile,
  isString,
  isBoolean,
  isFunction,
  isNumber,
  isNull,
  isUndefined,
  isEmpty,
  isNumeric,
};
