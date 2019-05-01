"use strict";

function isFunction(func) {
  if (typeof func == "function") {
    return true;
  } else {
    return false;
  }
}

function isArray(arr) {
  if (Object.prototype.toString.call(arr) == "[object Array]") {
    return true;
  } else {
    return false;
  }
}

function isObject(obj) {
  if (Object.prototype.toString.call(obj) == "[object Object]") {
    return true;
  } else {
    return false;
  }
}

function isNumber(num) {
  if (typeof num == "number") {
    return true;
  } else {
    return false;
  }
}

function isString(str) {
  if (typeof str == "string") {
    return true;
  } else {
    return false;
  }
}

function isEmpty(emp) {
  if (typeof emp == "string" && emp.length == 0) {
    return true;
  } else {
    if (
      Object.prototype.toString.call(emp) == "[object Null]" || Object.prototype.toString.call(emp) == "[object Undefined]"
    ) {
      return true;
    } else {
      return false;
    }
  }
}

function extendClass(Parent, Child) {
  var F = function() {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}
