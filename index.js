var district = require('./district');
var province = require('./province');

module.exports = {
  district: district,
  province: province,
  // data for Picker async col
  provinceLite: [{
    value: 'bj',
    label: '北京市',
  }, {
    value: 'zj',
    label: '浙江省',
  }, {
    value: 'gd',
    label: '广东省',
  }, {
    value: 'hn',
    label: '海南省',
  }, {
    value: 'cq',
    label: '重庆市',
  }, {
    value: 'sc',
    label: '四川省',
  }]
};
