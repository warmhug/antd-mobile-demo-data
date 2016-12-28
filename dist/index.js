(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './district', './province'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./district'), require('./province'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.district, global.province);
    global.index = mod.exports;
  }
})(this, function (module, district, province) {
  'use strict';

  module.exports = {
    district: district,
    province: province,
    // data for Picker async col
    provinceLite: [{
      value: 'bj',
      label: '北京市'
    }, {
      value: 'zj',
      label: '浙江省'
    }, {
      value: 'gd',
      label: '广东省'
    }, {
      value: 'hn',
      label: '海南省'
    }, {
      value: 'cq',
      label: '重庆市'
    }, {
      value: 'sc',
      label: '四川省'
    }]
  };
});