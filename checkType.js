"use strict";

function isFunction(func) {
  return typeof func == "function";
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
}

function isObject(obj) {
  return  Object.prototype.toString.call(obj) == "[object Object]";
}

function isNumber(num) {
  return  typeof num == "number";
}

function isString(str) {
  return typeof str == "string";
}

function isEmpty(emp) {
  if (typeof emp == "string" && emp.length == 0) {
    return true;
  } 
  else {
    return Object.prototype.toString.call(emp) == "[object Null]" || Object.prototype.toString.call(emp) == "[object Undefined]";
  }
}

function extendClass(Parent, Child) {
  var F = function() {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}
